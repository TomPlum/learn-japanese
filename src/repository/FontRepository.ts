import { Font } from "../components/ui/buttons/FontSelectorButton";

export default class FontRepository {
    private readonly defaultFont: Font = { slug: "default", name: "Arial" };

    private readonly fonts: Font[] = [
        this.defaultFont,
        { slug: "handwriting", name: "SanafonMugi Handwriting" },
        { slug: "gothic", name: "K Gothic" },
        { slug: "mincho", name: "Appli Mincho" }
    ];

    public read(): Promise<Font[]> {
        return Promise.resolve(this.fonts);
    }

    public readBySlug(slug: string): Font {
        return this.fonts.find(font => font.slug === slug) ?? this.defaultFont;
    }

    public findByName(name: string): Font {
        return this.fonts.find(font => font.name === name) ?? this.defaultFont;
    }
}
