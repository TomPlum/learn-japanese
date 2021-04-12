import CalendarRepository from "../../repository/CalendarRepository";

describe("Calendar Repository", () => {
    const repository = new CalendarRepository();

    it("Should return the days when the days property is true", () => {
        const response = repository.read({ days: true });
        expect(response).toHaveLength(7);
    });

    it("Should return the months when the months property is true", () => {
        const response = repository.read({ months: true });
        expect(response).toHaveLength(12);
    });

    it("Should return the temporal nouns when the nouns property is true", () => {
        const response = repository.read({ nouns: true });
        expect(response).toHaveLength(4);
    });

    it("Should return an empty array when no properties are passed", () => {
        const response = repository.read({});
        expect(response).toHaveLength(0);
    });
});