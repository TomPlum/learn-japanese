import FontService from "../../service/FontService";
import { localStorageMock } from "../../setupTests";

const mockFontRepository = jest.fn();
jest.mock("../../repository/FontRepository", () => {
    return function () { return { read: mockFontRepository } }
});

describe("Font Service", () => {
    const service = new FontService();

    beforeEach(() => {
        mockFontRepository.mockResolvedValueOnce([
            { displayName: "Default", name: "" },
            { displayName: "Handwriting", name: "SanafonMugi Handwriting" },
            { displayName: "Gothic", name: "K Gothic" },
            { displayName: "Mincho", name: "Appli Mincho" }
        ]);

       localStorageMock.clear();
    });

    describe("Get Selected Font", () => {
        it("Should call the font repository", () => {
           return service.getSelectedFont().then(() => {
              expect(mockFontRepository).toHaveBeenCalled();
           });
        });

        it("Should return the font whose name matches the one in local storage", () => {
           localStorageMock.setItem("font", "Appli Mincho");
           return service.getSelectedFont().then(font => {
              expect(font?.displayName).toBe("Mincho");
           });
        });

        it("Should return undefined if the font is local storage doesn't match any in the repository response", () => {
           localStorageMock.setItem("font", "Unknown Font");
           return service.getSelectedFont().then(font => {
              expect(font).toBeUndefined();
           });
        });

        it("Should return undefined if the repository call fails", () => {
            mockFontRepository.mockReset().mockRejectedValueOnce({ error: "Oh dear." });
            return service.getSelectedFont().then(font => {
                expect(font).toBeUndefined();
            });
        });
    });
});
