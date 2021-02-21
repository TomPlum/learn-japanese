export class Environment {
    static variable = (name: string): string => {
        const parsed = name.replaceAll(" ", "_").toUpperCase();
        return process.env["REACT_APP_" + parsed] as string;
    }
}