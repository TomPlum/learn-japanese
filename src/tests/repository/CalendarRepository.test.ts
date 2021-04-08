import CalendarRepository from "../../repository/CalendarRepository";

describe("Calendar Repository", () => {
    const repository = new CalendarRepository();

    it("Should return only days", () => {
        const response = repository.read({});
        expect(response).toHaveLength(7);
    });
});