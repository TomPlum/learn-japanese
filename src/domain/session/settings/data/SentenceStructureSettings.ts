import Topic from "../../../Topic"
import DataSettings from "./DataSettings"

/**
 * Settings used to by {@link SentenceStructureRepository} to customise
 * the selection of definitions returned.
 * @see SentenceStructureSettingsBuilder
 */
export default class SentenceStructureSettings extends DataSettings {
  private readonly _adverbs: boolean
  private readonly _particles: boolean
  private readonly _expressions: boolean
  private readonly _verbs: boolean
  private readonly _nouns: boolean
  private readonly _adjectives: boolean

  constructor(
    adverbs: boolean,
    particles: boolean,
    expressions: boolean,
    verbs: boolean,
    nouns: boolean,
    adjectives: boolean,
    quantity?: number
  ) {
    super(Topic.GRAMMAR, quantity)
    this._adverbs = adverbs
    this._particles = particles
    this._expressions = expressions
    this._verbs = verbs
    this._nouns = nouns
    this._adjectives = adjectives
  }

  get adverbs(): boolean {
    return this._adverbs
  }

  get particles(): boolean {
    return this._particles
  }

  get expressions(): boolean {
    return this._expressions
  }

  get verbs(): boolean {
    return this._verbs
  }

  get nouns(): boolean {
    return this._nouns
  }

  get adjectives(): boolean {
    return this._adjectives
  }
}

export class SentenceStructureSettingsBuilder {
  private _adverbs = false
  private _particles = false
  private _expressions = false
  private _verbs = false
  private _nouns = false
  private _adjectives = false
  private _quantity: number | undefined

  withAdverbs(include = true): SentenceStructureSettingsBuilder {
    this._adverbs = include
    return this
  }

  withParticles(include = true): SentenceStructureSettingsBuilder {
    this._particles = include
    return this
  }

  withExpressions(include = true): SentenceStructureSettingsBuilder {
    this._expressions = include
    return this
  }

  withVerbs(include = true): SentenceStructureSettingsBuilder {
    this._verbs = include
    return this
  }

  withNouns(include = true): SentenceStructureSettingsBuilder {
    this._nouns = include
    return this
  }

  withAdjectives(include = true): SentenceStructureSettingsBuilder {
    this._adjectives = include
    return this
  }

  withQuantity(quantity?: number): SentenceStructureSettingsBuilder {
    this._quantity = quantity
    return this
  }

  build(): SentenceStructureSettings {
    return new SentenceStructureSettings(
      this._adverbs,
      this._particles,
      this._expressions,
      this._verbs,
      this._nouns,
      this._adjectives,
      this._quantity
    )
  }
}
