import TemplateString from "./TemplateString.ts"

describe("Template String", () => {
  it("Should replace a single placeholder", () => {
    expect(new TemplateString("My name is {0}").format("Tom")).toBe("My name is Tom")
  })

  it("Should replace multiple placeholders", () => {
    const template = new TemplateString("My name is {0} and I am {1} years old")
    const formatted = template.format("Tom", 24)
    expect(formatted).toBe("My name is Tom and I am 24 years old")
  })
})
