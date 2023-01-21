import { SentenceStructureSettingsBuilder } from "../../../../domain/session/settings/data/SentenceStructureSettings"
import { render } from "@testing-library/react"
import SentenceStructureDataSettingsSummary from "../../../../components/settings/summary/SentenceStructureDataSettingsSummary"

let settings = new SentenceStructureSettingsBuilder()

beforeEach(() => {
    settings = new SentenceStructureSettingsBuilder()
})

test("Should render the particles text if passed", () => {
    settings.withParticles()
    const { container } = render(<SentenceStructureDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("particles")
})

test("Should render the adjectives text if passed", () => {
    settings.withAdjectives()
    const { container } = render(<SentenceStructureDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("adjectives")
})

test("Should render the adverbs text if passed", () => {
    settings.withAdverbs()
    const { container } = render(<SentenceStructureDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("adverbs")
})

test("Should render the nouns text if passed", () => {
    settings.withNouns()
    const { container } = render(<SentenceStructureDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("nouns")
})

test("Should render the expressions text if passed", () => {
    settings.withExpressions()
    const { container } = render(<SentenceStructureDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("expressions")
})

test("Should render the verbs text if passed", () => {
    settings.withVerbs()
    const { container } = render(<SentenceStructureDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("verbs")
})

test("Should render the correct text if multiple are passed", () => {
    settings.withVerbs().withParticles().withAdjectives().withAdverbs().withNouns().withExpressions()
    const { container } = render(<SentenceStructureDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("particles, adjectives, adverbs, nouns, expressions and verbs")
})
