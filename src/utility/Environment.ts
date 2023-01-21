export class Environment {
    static variable = (name: string): string => {
        //Replace spaces with underscores.
        const underscores = name.replaceAll(" ", "_")

        //Remove single quotes
        const special = underscores.replaceAll("'", "")

        //Replace diacritical marks with their regular counterparts.
        const diacritics = special.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        //Convert to uppercase.
        const casing = diacritics.toUpperCase()

        //Prepend 'REACT_APP'.
        const variable = "REACT_APP_" + casing

        //console.log("Reading " + variable + " from " + process.env.NODE_ENV);
        return process.env[variable] as string
    }
}
