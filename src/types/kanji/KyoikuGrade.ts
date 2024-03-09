export class KyoikuGrade {
  private readonly _value: number
  private readonly _quantity: number

  private constructor(value: number, quantity: number) {
    this._value = value
    this._quantity = quantity
  }

  public static readonly ONE = new KyoikuGrade(1, 80)
  public static readonly TWO = new KyoikuGrade(2, 160)
  public static readonly THREE = new KyoikuGrade(3, 200)
  public static readonly FOUR = new KyoikuGrade(4, 220)
  public static readonly FIVE = new KyoikuGrade(5, 185)
  public static readonly SIX = new KyoikuGrade(6, 181)
  public static readonly SEVEN = new KyoikuGrade(7, 0)
  public static readonly EIGHT = new KyoikuGrade(8, 0)
  public static readonly NINE = new KyoikuGrade(9, 0)
  public static readonly TEN = new KyoikuGrade(10, 0)
  public static readonly ELEVEN = new KyoikuGrade(11, 0)
  public static readonly TWELVE = new KyoikuGrade(12, 0)
  public static readonly UNKNOWN = new KyoikuGrade(0, 0)

  public static readonly ALL = [
    KyoikuGrade.ONE,
    KyoikuGrade.TWO,
    KyoikuGrade.THREE,
    KyoikuGrade.FOUR,
    KyoikuGrade.FIVE,
    KyoikuGrade.SIX,
    KyoikuGrade.SEVEN,
    KyoikuGrade.EIGHT
  ]

  public static fromInteger = (value?: number): KyoikuGrade => {
    switch (value) {
      case 1:
        return KyoikuGrade.ONE
      case 2:
        return KyoikuGrade.TWO
      case 3:
        return KyoikuGrade.THREE
      case 4:
        return KyoikuGrade.FOUR
      case 5:
        return KyoikuGrade.FIVE
      case 6:
        return KyoikuGrade.SIX
      case 7:
        return KyoikuGrade.SEVEN
      case 8:
        return KyoikuGrade.EIGHT
      case 9:
        return KyoikuGrade.NINE
      case 10:
        return KyoikuGrade.TEN
      case 11:
        return KyoikuGrade.ELEVEN
      case 12:
        return KyoikuGrade.TWELVE
      default:
        return KyoikuGrade.UNKNOWN
    }
  }

  get value(): number {
    return this._value
  }

  get quantity(): number {
    return this._quantity
  }
}
