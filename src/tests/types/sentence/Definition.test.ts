import Definition from "../../../domain/sentence/Definition"

describe("Definition Data Object", () => {
  const definition = new Definition(["interesting", "funny"], "面白い", "おもしろい", "い Adjective")

  it("Should return its only kana value in an array when getting kana", () => {
    expect(definition.getKana()).toStrictEqual(["おもしろい"])
  })

  it("Should return its kanji variant", () => {
    expect(definition.getKanjiVariation()).toBe("面白い")
  })

  it("Should return its meanings", () => {
    expect(definition.getMeanings()).toStrictEqual(["interesting", "funny"])
  })

  it("Should return its type as the title", () => {
    expect(definition.getTitle()).toBe("い Adjective")
  })

  it("Should return its hint in the correct format", () => {
    expect(definition.getHint()).toBe("It starts with お")
  })

  it("Should return its unique ID as a concatenation of all of its meanings", () => {
    expect(definition.getUniqueID()).toBe("interesting-funny")
  })
})
