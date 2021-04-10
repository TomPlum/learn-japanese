export class KyoikuGrade {
    private readonly _value: number;
    private readonly _quantity: number;

    private constructor(value: number, quantity: number) {
        this._value = value;
        this._quantity = quantity;
    }

    public static readonly ONE = new KyoikuGrade(1, 80);
    public static readonly TWO = new KyoikuGrade(2, 160);
    public static readonly THREE = new KyoikuGrade(3, 200);
    public static readonly FOUR = new KyoikuGrade(4, 200);
    public static readonly FIVE = new KyoikuGrade(5, 185);
    public static readonly SIX = new KyoikuGrade(6, 181);

    public static readonly ALL = [KyoikuGrade.ONE, KyoikuGrade.TWO, KyoikuGrade.THREE, KyoikuGrade.FOUR, KyoikuGrade.FIVE, KyoikuGrade.SIX]

    get value(): number {
        return this._value;
    }

    get quantity(): number {
        return this._quantity;
    }
}