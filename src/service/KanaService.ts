import { Kana } from "../domain/kana/Kana"
import KanaRepository from "../repository/KanaRepository"
import KanaSettings from "../domain/session/settings/data/KanaSettings"

class KanaService {
    private readonly repository = new KanaRepository()

    /**
     * Retrieves an array of kana based on the given config.
     * @param config The details of which kana to retrieve.
     * @return kana An array of kana.
     */
    public async getKana(config: KanaSettings): Promise<Kana[]> {
        return this.repository
            .read(config)
            .then((response) => {
                return response
            })
            .catch(() => {
                return []
            })
    }
}

export default KanaService
