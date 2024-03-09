export default class TemplateString {
  private readonly value: string

  constructor(props: string) {
    this.value = props
  }

  public format(...args: any[]): string {
    let response = this.value

    for (let i = 0; i < args.length; i++) {
      response = response.replace("{" + i + "}", args[i].toString())
    }

    return response
  }
}
