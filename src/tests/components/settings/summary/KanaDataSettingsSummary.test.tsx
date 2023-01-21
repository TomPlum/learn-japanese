import { render } from "@testing-library/react"
import KanaDataSettingsSummary from "../../../../components/settings/summary/KanaDataSettingsSummary"
import { KanaSettingsBuilder } from "../../../../domain/session/settings/data/KanaSettings"

let settings = new KanaSettingsBuilder()

beforeEach(() => {
    settings = new KanaSettingsBuilder()
})

test("It should render the correct text for only diagraphs from hiragana", () => {
    settings.withOnlyDiagraphs().withHiragana(true).withKatakana(false)
    const { container } = render(<KanaDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("diagraphs from the hiragana syllabary")
})

test("It should render the correct text for only diagraphs from katakana", () => {
    settings.withOnlyDiagraphs().withHiragana(false).withKatakana(true)
    const { container } = render(<KanaDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("diagraphs from the katakana syllabary")
})

test("It should render the correct text for only diagraphs for both syllabaries", () => {
    settings.withOnlyDiagraphs().withHiragana(true).withKatakana(true)
    const { container } = render(<KanaDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("diagraphs from the hiragana and katakana syllabaries")
})

test("It should render the correct text for only hiragana", () => {
    settings.withHiragana(true)
    const { container } = render(<KanaDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("hiragana")
})

test("It should render the correct text for only katakana", () => {
    settings.withKatakana(true)
    const { container } = render(<KanaDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("katakana")
})

test("It should render the correct text for hiragana and katakana", () => {
    settings.withKatakana(true).withHiragana(true)
    const { container } = render(<KanaDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("hiragana and katakana")
})

test("It should render the correct text when diagraphs are included", () => {
    settings.withHiragana().withDiagraphs()
    const { container } = render(<KanaDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("hiragana with diagraphs included")
})

test("It should render the correct text when diacriticals are included", () => {
    settings.withHiragana().withDiacriticals()
    const { container } = render(<KanaDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("hiragana with diacriticals included")
})

test("It should render the correct text when both diagraphs and diacriticals are included", () => {
    settings.withHiragana().withDiagraphs().withDiacriticals()
    const { container } = render(<KanaDataSettingsSummary settings={settings.build()} />)
    expect(container).toHaveTextContent("hiragana with diagraphs and diacriticals included")
})
