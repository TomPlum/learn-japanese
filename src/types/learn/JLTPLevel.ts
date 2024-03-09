export default class JLTPLevel {
  private readonly _value: string
  private readonly _level: number

  private constructor(value: string, level: number) {
    this._value = value
    this._level = level
  }

  public static N1 = new JLTPLevel("N1", 1)
  public static N2 = new JLTPLevel("N2", 2)
  public static N3 = new JLTPLevel("N3", 3)
  public static N4 = new JLTPLevel("N4", 4)
  public static N5 = new JLTPLevel("N5", 5)
  public static UNKNOWN = new JLTPLevel("N/A", 0)

  public static ALL = [JLTPLevel.N1, JLTPLevel.N2, JLTPLevel.N3, JLTPLevel.N4, JLTPLevel.N5]

  public static fromString(value: string): JLTPLevel | undefined {
    switch (value) {
      case "N1":
        return JLTPLevel.N1
      case "N2":
        return JLTPLevel.N2
      case "N3":
        return JLTPLevel.N3
      case "N4":
        return JLTPLevel.N4
      case "N5":
        return JLTPLevel.N5
      default:
        return JLTPLevel.UNKNOWN
    }
  }

  get value(): string {
    return this._value
  }

  get level(): number {
    return this._level
  }
}
