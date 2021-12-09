import FontRepository from "../../repository/FontRepository";

describe("Font Repository", () => {
    const repository = new FontRepository();

    it("Should return a list of hardcoded fonts", () => {
        return repository.read().then(response => {
            expect(response).toStrictEqual([
                { displayName: "Default", name: "" },
                { displayName: "Handwriting", name: "SanafonMugi Handwriting" },
                { displayName: "Gothic", name: "K Gothic" },
                { displayName: "Mincho", name: "Appli Mincho" }
            ]);
        });
    });
});
