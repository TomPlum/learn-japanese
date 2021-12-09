import { Font } from "../components/ui/buttons/FontSelectorButton";

export default class FontRepository {
    private readonly fonts: Font[] = [
        { displayName: "Default", name: "" },
        { displayName: "Handwriting", name: "SanafonMugi Handwriting" },
        { displayName: "Gothic", name: "K Gothic" },
        { displayName: "Mincho", name: "Appli Mincho" }, //アプリ明朝 <- Name in Japanese
    ];

    public read(): Promise<Font[]> {
        return Promise.resolve(this.fonts);
    }
}
