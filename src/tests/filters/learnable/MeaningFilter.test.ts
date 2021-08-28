import CommonData from "../../../domain/learn/CommonData";
import MeaningFilter from "../../../filters/learnable/MeaningFilter";
import { Learnable } from "../../../domain/learn/Learnable";
import each from "jest-each";

const data = [
    new CommonData("Sunday", ["にちようび"], "日曜日", "Day of the Week", "Sunday", undefined),
    new CommonData("Monday", ["げつよぅび"], "月曜日", "Day of the Week", "Monday", undefined)
];

describe("Meaning Filter", () => {
    it("Should return only the data that has a matching meaning", () => {
        const filter = new MeaningFilter("Sunday");
        const response = filter.apply(data);
        expect(response.map((datum: Learnable) => datum.getMeanings()[0])).toStrictEqual(["Sunday"]);
    });

    it("Should return data whose meanings string values contain part of the given search", () => {
       const filter = new MeaningFilter("day");
       const response = filter.apply(data);
        expect(response.map((datum: Learnable) => datum.getMeanings()[0])).toStrictEqual(["Sunday", "Monday"]);
    });

    it("Should return an empty array if none of the data objects have any of the passed meanings", () => {
       const filter = new MeaningFilter("Wednesday");
       const response = filter.apply(data);
       expect(response).toHaveLength(0);
    });

    each([null, undefined, ""]).it("Should return an empty array if a [%s] meaning is passed in", (meaning: string) => {
       const filter = new MeaningFilter(meaning);
       const response = filter.apply(data);
       expect(response).toHaveLength(0);
    });
});
