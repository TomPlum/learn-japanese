import FontRepository from "../repository/FontRepository";
import { Font } from "../components/ui/buttons/FontSelectorButton";

class FontService {

    private readonly _repository = new FontRepository();

    /**
     * Retrieves all available fonts.
     * These fonts are specifically for Japanese kanji and/or kana.
     * @return fonts An array of fonts.
     */
    public getFonts(): Promise<Font[]> {
        return this._repository.read().then(response => {
            return response;
        });
    }

    /**
     * Retrieves the currently selected global kanji font.
     *
     * Attempts to retrieve it from the browsers local storage.
     * The font is cached by the Redux reducer as is dispatched by
     * the font selector on the navigation bar.
     *
     * @return font The selected font, or else undefined if not set.
     */
    public getSelectedFont(): Promise<Font | undefined> {
        return this._repository.read().then(response => {
            const cachedSelection = localStorage.getItem("font") ?? "";
            return response.find(font => font.name === cachedSelection);
        }).catch(() => {
            return undefined;
        });
    }
}

export default FontService;
