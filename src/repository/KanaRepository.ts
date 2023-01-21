import { Kana } from "../domain/kana/Kana"
import hiragana from "../data/Hiragana"
import katakana from "../data/Katakana"
import KanaType from "../domain/kana/KanaType"
import { KanaData } from "../data/DataTypes"
import DiagraphFilter from "../filters/kana/DiagraphFilter"
import FilterChain from "../filters/FilterChain"
import QuantityFilter from "../filters/kana/QuantityFilter"
import KanaTypeFilter from "../filters/kana/KanaTypeFilter"
import Repository from "./Repository"
import KanaSettings from "../domain/session/settings/data/KanaSettings"
import DiacriticalFilter from "../filters/kana/DiacriticalFilter"
import RegularKanaFilter from "../filters/kana/RegularKanaFilter"
import RestClient from "../rest/RestClient"
import KanaConverter from "../converter/KanaConverter"

export interface KanaResponse {
  character: string
  column: string
  romaji: string[]
  diacritical: boolean
}

export interface AllKanaResponse {
  hiragana: KanaResponse[]
  katakana: KanaResponse[]
}

export default class KanaRepository implements Repository<Kana> {
  private converter = new KanaConverter()

  public readAll(): Promise<Kana[]> {
    return RestClient.get<AllKanaResponse>("/kana/all")
      .then((response) => {
        const data = response.data
        if (data) {
          const hiragana = data.hiragana.map((kana) => this.converter.convert(kana, KanaType.HIRAGANA))
          const katakana = data.katakana.map((kana) => this.converter.convert(kana, KanaType.KATAKANA))
          return hiragana.concat(katakana)
        }
        return Promise.resolve([])
      })
      .catch(() => {
        return Promise.resolve([])
      })
  }

  public read(config: KanaSettings): Promise<Kana[]> {
    const chain = new FilterChain<Kana>()

    if (!config.hiragana) {
      chain.addFilter(new KanaTypeFilter(KanaType.HIRAGANA))
    }

    if (!config.katakana) {
      chain.addFilter(new KanaTypeFilter(KanaType.KATAKANA))
    }

    if (!config.regular) {
      chain.addFilter(new RegularKanaFilter())
    }

    if (config.onlyDiagraphs) {
      chain.addFilter(new DiagraphFilter(true, true))
    } else {
      if (!config.diagraphs) {
        chain.addFilter(new DiagraphFilter())
      }

      if (!config.diacriticals) {
        chain.addFilter(new DiacriticalFilter(false, config.diagraphs))
      }
    }

    if (config.quantity) {
      chain.addFilter(new QuantityFilter(config.quantity, true))
    }

    return Promise.all(chain.execute(this.getAllKana()))
  }

  private getAllKana(): Kana[] {
    const hiragana = this.readHiragana()
    const katakana = this.readKatakana()
    return hiragana.concat(katakana)
  }

  private readHiragana(): Kana[] {
    return this.convert(hiragana(), KanaType.HIRAGANA)
  }

  private readKatakana(): Kana[] {
    return this.convert(katakana(), KanaType.KATAKANA)
  }

  private convert(data: KanaData[], type: KanaType): Kana[] {
    return data.map((data) => new Kana(data.code, data.romaji, type, data.column, data.diacritical))
  }
}
