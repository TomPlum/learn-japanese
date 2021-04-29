export default class TemplateString extends String {

    private readonly value: string;

    constructor(props: string) {
        super(props);
        this.value = props;
    }

    public format(...args: any[]): string {
        let response = this.value;

        for (let i = 0; i < args.length; i++) {
            response = response.replace("{" + i + "}", args[i].toString())
        }

        return response;
    }
}