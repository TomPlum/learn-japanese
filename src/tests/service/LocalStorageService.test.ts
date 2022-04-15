import LocalStorageService from "../../service/LocalStorageService";
import { localStorageMock } from "../../setupTests";

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
            let icons = service.getRecentlyUsedIcons();
            expect(icons).toStrictEqual(["FaBed", "FaAngleDoubleLeft"]);
        });

        it("Should return an empty array if there are no values in local storage", () => {
            localStorageMock.clear();
            let icons = service.getRecentlyUsedIcons();
            expect(icons).toStrictEqual([]);
        });
    });
})
