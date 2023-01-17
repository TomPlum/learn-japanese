import LocalStorageService from "../../service/LocalStorageService";
import { localStorageMock } from "../../setupTests";
import each from "jest-each";

describe("Local Storage Service", () => {
    const service = new LocalStorageService();

    describe("Icons", () => {
        it("Should store the given icon name", () => {
            service.addRecentlyUsedIcon("FaAngleDoubleLeft");
            expect(localStorageMock.getItem("recent-icons")).toBe("[\"FaAngleDoubleLeft\"]");
        });

        it("Should not add a duplicate icon name", () => {
            service.addRecentlyUsedIcon("FaAngleDoubleLeft");
            service.addRecentlyUsedIcon("FaAngleDoubleLeft");
            expect(localStorageMock.getItem("recent-icons")).toBe("[\"FaAngleDoubleLeft\"]");
        });

        it("Should add the newest icon to the front of the array", () => {
            service.addRecentlyUsedIcon("FaAngleDoubleLeft");
            service.addRecentlyUsedIcon("FaBed");
            expect(localStorageMock.getItem("recent-icons")).toBe("[\"FaBed\",\"FaAngleDoubleLeft\"]");
        });

        it("Should drop the last element and add the newest to the front if there are already 5 recent icons", () => {
            // Add 5 recent icon
            service.addRecentlyUsedIcon("FaAngleDoubleLeft");
            service.addRecentlyUsedIcon("FaAmazon");
            service.addRecentlyUsedIcon("FaBacterium");
            service.addRecentlyUsedIcon("FaCommentSlash");
            service.addRecentlyUsedIcon("FaBed");

            // Adding a sixth should cause them to roll and drop the first
            service.addRecentlyUsedIcon("FaRegWindowClose");

            // TODO: Find a way to make JSON.stringify() maintain insertion order of the array
            expect(localStorageMock.getItem("recent-icons")).toBe("[" +
                "\"FaRegWindowClose\"," +
                "\"FaCommentSlash\"," +
                "\"FaBacterium\"," +
                "\"FaAmazon\"," +
                "\"FaBed\"" +
            "]");
        });

        it("Should return an array of icon names from local storage", () => {
            localStorageMock.setItem("recent-icons", "[\"FaBed\",\"FaAngleDoubleLeft\"]");
            const icons = service.getRecentlyUsedIcons();
            expect(icons).toStrictEqual(["FaBed", "FaAngleDoubleLeft"]);
        });

        it("Should return an empty array if there are no values in local storage", () => {
            localStorageMock.clear();
            const icons = service.getRecentlyUsedIcons();
            expect(icons).toStrictEqual([]);
        });
    });

    describe("User Profile Registration Hint", () => {
        it("Should return true if the value is stringified true", () => {
            localStorageMock.setItem("hide-user-profile-hint", "true");
            const hide = service.getHideUserProfileHint();
            expect(hide).toBe(true);
        });

        each([undefined, null, "", "false"]).it("Should return false if the value is falsy", (value: string) => {
            localStorageMock.setItem("hide-user-profile-hint", value);
            const hide = service.getHideUserProfileHint();
            expect(hide).toBe(false);
        });

        it("Should set the a true string in the correct key", () => {
            localStorageMock.clear();
            service.setHideUserProfileHint();
            expect(localStorageMock.getItem("hide-user-profile-hint")).toBe("true");
        });
    });

    describe("Clear", () => {
        it("Should clear recent icons", () => {
            localStorageMock.setItem("recent-icons", "[\"FaBed\",\"FaAngleDoubleLeft\"]");
            service.clear();
            expect(localStorageMock.getItem("recent-icon")).toBeUndefined();
        });

        it("Should clear user profile registration hint", () => {
            localStorageMock.setItem("hide-user-profile-hint", "true");
            service.clear();
            expect(localStorageMock.getItem("hide-user-profile-hint")).toBeUndefined();
        });

        it("Should clear the last play session", () => {
            localStorageMock.setItem("last-play-session", "{\"key\": \"value\"}");
            service.clear();
            expect(localStorageMock.getItem("last-play-session")).toBeUndefined();
        });

        it("Should clear the last learn session", () => {
            localStorageMock.setItem("last-learn-session", "{\"key\": \"value\"}");
            service.clear();
            expect(localStorageMock.getItem("last-learn-session")).toBeUndefined();
        });

        it("Should clear the kanji font selection", () => {
            localStorageMock.setItem("font", "SanafonMugi Handwriting");
            service.clear();
            expect(localStorageMock.getItem("font")).toBeUndefined();
        });
    });
})
