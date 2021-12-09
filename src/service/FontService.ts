import FontRepository from "../repository/FontRepository";
import { Font } from "../components/ui/buttons/FontSelectorButton";

class FontService {

    private readonly _repository = new FontRepository();

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
