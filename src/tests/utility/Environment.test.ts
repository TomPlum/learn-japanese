import { Environment } from "../../utility/Environment";

describe("Environment", () => {
    it("Should retrieve the environment variable", () => {
        const value = Environment.variable('EXAMPLE');
        expect(value).toBe('Example text');
    });
});