class GridDisplayType {
    private readonly _showShort: boolean

    public static GRID = new GridDisplayType(true)
    public static LIST = new GridDisplayType(false)

    private constructor(showShort: boolean) {
        this._showShort = showShort
    }

    get showShort(): boolean {
        return this._showShort
    }
}

export default GridDisplayType
