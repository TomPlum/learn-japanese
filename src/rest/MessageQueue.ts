import RestClient, { APIResponse } from "./RestClient"
import { Method } from "axios"

/**
 * A single message to be sent to the API.
 */
export interface Message<T> {
  method: Method
  endpoint: string
  body?: T
}

/**
 * Interfaces with API endpoints that exchange with a message broker.
 * Queues and asynchronously dispatches API requests and retries failed messages.
 */
class MessageQueue {
  /** The unique key used to store the queue in local storage. */
  private static readonly _key = "mq"

  private _interval: NodeJS.Timer | undefined = undefined
  private readonly _messages: Message<any>[] = []

  /**
   * Use the {@link fromLocalStorage} static factory constructor.
   * @param messages The messages to enqueue by default.
   */
  private constructor(messages: Message<any>[]) {
    this._messages = messages
  }

  /**
   * Creates a new {@link MessageQueue} instance and populates the
   * messages stored in the browsers' local storage. Defaults the queue
   * to an empty array if there is nothing found in the local storage.
   * @returns queue A new message queue instance.
   */
  public static fromLocalStorage() {
    const queueString = localStorage.getItem(MessageQueue._key)
    if (queueString) {
      try {
        const messages: Message<any>[] = JSON.parse(queueString)
        return new MessageQueue(messages)
      } catch (e) {
        return new MessageQueue([])
      }
    }
    return new MessageQueue([])
  }

  /**
   * Enqueues the given request in the queue.
   * @param request The message to enqueue.
   */
  public enqueue<T>(request: Message<T>) {
    console.log(`Enqueueing request to [${request.method}] ${request.endpoint}`)
    this._messages.push(request)
    this.scheduleResolve()
  }

  /**
   * Resolves all outstanding messages in the queue.
   * API requests are asynchronously fired until all have
   * successfully resolved.
   */
  public async resolve() {
    if (this._messages.length > 0) {
      const message = this._messages.pop()!
      await this.doResolve(message).then(() => {
        const queueString = JSON.stringify(this._messages)
        localStorage.setItem(MessageQueue._key, queueString)
      })
    }
  }

  /**
   * Recursively resolves any outstanding messages in the queue.
   * If an API call fails, that message is pushed back into the queue.
   * @param request The message to resolve.
   */
  private async doResolve(request: Message<any>) {
    return RestClient.send(request.method, request.endpoint, request.body)
      .then((response: APIResponse<any>) => {
        if (response.status >= 200 && response.status < 300) {
          const nextMessage = this._messages.pop()
          if (nextMessage) {
            this.doResolve(nextMessage)
          }
        } else {
          return Promise.reject()
        }
      })
      .catch(() => {
        this.doResolve(request)
      })
  }

  /**
   * Schedules the message on the head of the queue for resolution.
   * Waits 5 seconds before resolving.
   */
  private scheduleResolve() {
    this._interval = setInterval(() => {
      this.resolve().then(() => {
        clearInterval(this._interval!)
      })
    }, 5000)
  }

  /**
   * Retrieves the currently enqueued messages.
   * @return messages Unresolved messages waiting in the queue.
   */
  get messages(): Message<any>[] {
    return this._messages
  }
}

export default MessageQueue
