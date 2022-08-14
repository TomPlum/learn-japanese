import FontRepository from "../../repository/FontRepository";

describe("Font Repository", () => {
    const repository = new FontRepository();

    it("Should return a list of hardcoded fonts", () => {
        return repository.read().then(response => {
            expect(response).toStrictEqual([
                { slug: "default", name: "Arial" },
                { slug: "handwriting", name: "SanafonMugi Handwriting" },
                { slug: "gothic", name: "K Gothic" },
                { slug: "mincho", name: "Appli Mincho" }
            ]);
        });
    });
});
