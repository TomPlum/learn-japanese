import MessageQueue from "../../rest/MessageQueue"
import RestClient from "../../rest/RestClient"

const mockRestClient = jest.fn()

beforeEach(() => {
  localStorage.removeItem("mq")
  jest.useFakeTimers()
  RestClient.send = mockRestClient
})

test("Creating a new queue from local storage should auto enqueue existing messages", () => {
  localStorage.setItem("mq", JSON.stringify([{ method: "POST", endpoint: "/update", body: { value: 1 } }]))
  const queue = MessageQueue.fromLocalStorage()
  expect(queue.messages).toStrictEqual([{ method: "POST", endpoint: "/update", body: { value: 1 } }])
})

test("Creating a new queue from local storage where no key exists should default messages to empty array", () => {
  localStorage.clear()
  const queue = MessageQueue.fromLocalStorage()
  expect(queue.messages).toStrictEqual([])
})

test("Creating a new queue from local storage where the queue string is malformed should default to empty array", () => {
  localStorage.setItem("mq", "[{malformedString,-:}]")
  const queue = MessageQueue.fromLocalStorage()
  expect(queue.messages).toStrictEqual([])
})

test("Enqueueing a message should add it to the messages", () => {
  const queue = MessageQueue.fromLocalStorage()
  queue.enqueue({ method: "POST", endpoint: "/update", body: { value: 1 } })
  expect(queue.messages).toStrictEqual([{ method: "POST", endpoint: "/update", body: { value: 1 } }])
})

test("Resolving the queue should fire a Rest API request for each of the messages", async () => {
  localStorage.setItem(
    "mq",
    JSON.stringify([
      { method: "POST", endpoint: "/update", body: { value: 1 } },
      { method: "PUT", endpoint: "/example", body: { value: 5 } }
    ])
  )
  mockRestClient.mockResolvedValue({ status: 200 })
  const queue = MessageQueue.fromLocalStorage()

  await queue.resolve()

  expect(mockRestClient).toHaveBeenCalledTimes(2)
  expect(mockRestClient).toHaveBeenNthCalledWith(1, "PUT", "/example", { value: 5 })
  expect(mockRestClient).toHaveBeenNthCalledWith(2, "POST", "/update", { value: 1 })
})

test("Resolving the queue should re-enqueue a message if its API request fails", async () => {
  localStorage.setItem(
    "mq",
    JSON.stringify([
      { method: "POST", endpoint: "/update", body: { value: 1 } },
      { method: "PUT", endpoint: "/example", body: { value: 5 } }
    ])
  )
  mockRestClient
    .mockResolvedValueOnce({ status: 500 })
    .mockResolvedValueOnce({ status: 200 })
    .mockResolvedValueOnce({ status: 200 })
  const queue = MessageQueue.fromLocalStorage()

  await queue.resolve()

  expect(mockRestClient).toHaveBeenCalledTimes(3)
  expect(mockRestClient).toHaveBeenNthCalledWith(1, "PUT", "/example", { value: 5 })
  expect(mockRestClient).toHaveBeenNthCalledWith(2, "PUT", "/example", { value: 5 })
  expect(mockRestClient).toHaveBeenNthCalledWith(3, "POST", "/update", { value: 1 })
})

test("Resolving the queue should not fire any API requests if there are no queued messages", () => {
  localStorage.clear()
  MessageQueue.fromLocalStorage().resolve()
  expect(mockRestClient).not.toHaveBeenCalled()
})

test("Resolving the queue should update the local storage afterwards", async () => {
  localStorage.setItem("mq", JSON.stringify([{ method: "POST", endpoint: "/update", body: { value: 1 } }]))
  mockRestClient.mockResolvedValue({ status: 200 })
  const queue = MessageQueue.fromLocalStorage()

  await queue.resolve()

  expect(JSON.parse(localStorage.getItem("mq")!)).toStrictEqual([])
})

test("After enqueuing a message, it should automatically resolve it after 5 seconds", () => {
  localStorage.setItem("mq", JSON.stringify([{ method: "POST", endpoint: "/update", body: { value: 1 } }]))
  mockRestClient.mockResolvedValue({ status: 200 })
  MessageQueue.fromLocalStorage()

  // Let's wait 4 seconds first, it shouldn't have resolved at this point
  jest.advanceTimersByTime(4000)
  expect(mockRestClient).not.toHaveBeenCalled()

  // Advance another second to make it 5
  jest.advanceTimersByTime(1000)
  expect(mockRestClient).toHaveBeenCalledWith("POST", "/update", { value: 1 })
})
