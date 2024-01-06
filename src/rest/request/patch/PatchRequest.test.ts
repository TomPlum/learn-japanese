import PatchRequest from "./PatchRequest.ts"
import PatchReplaceOperation from "./PatchReplaceOperation.ts"

describe("Patch Request", () => {
  describe("JSON Conversion", () => {
    it("Should build an object for each of the operations", () => {
      const request = new PatchRequest([
        new PatchReplaceOperation("examplePath1", "exampleValue1"),
        new PatchReplaceOperation("examplePath2", "exampleValue2")
      ])

      const json = request.toJSON()

      expect(json).toStrictEqual([
        { op: "replace", path: "/examplePath1", value: "exampleValue1" },
        { op: "replace", path: "/examplePath2", value: "exampleValue2" }
      ])
    })
  })
})
