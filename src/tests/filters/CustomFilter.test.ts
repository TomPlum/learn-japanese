import CustomFilter from "../../filters/CustomFilter"

describe("Custom Filter", () => {
  it("Should filter based on the provided function", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const response = new CustomFilter<number>((value) => value > 8).apply(data)
    expect(response).toStrictEqual([9, 10])
  })
})
