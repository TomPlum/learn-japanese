import { Environment } from "../../utility/Environment";

describe("Environment", () => {
    it("Should retrieve the environment variable", () => {
        const value = Environment.variable('EXAMPLE');
        expect(value).toBe('Example text');
    });

    it("Should covert to uppercase to match the environment variable", () => {
        const value = Environment.variable('example');
        expect(value).toBe('Example text');
    });

    it("Should replace spaces with underscores", () => {
        const value = Environment.variable('EXAMPLE WITH SPACES');
        expect(value).toBe('Example text with spaces');
    });

    it("Should replace special characters from variable key names", () => {
        const value = Environment.variable('CōNTAINS_SPECIAL_CHARACTERS');
        expect(value).toBe('Special characters should work');
    });
});