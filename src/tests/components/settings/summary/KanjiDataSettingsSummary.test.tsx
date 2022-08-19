import { KanjiSettingsBuilder } from "../../../../domain/session/settings/data/KanjiSettings";
import { KyoikuGrade } from "../../../../domain/kanji/KyoikuGrade";
import KanjiDataSettingsSummary from "../../../../components/settings/summary/KanjiDataSettingsSummary";
import { render } from "@testing-library/react";

let settings = new KanjiSettingsBuilder();

beforeEach(() => {
    settings = new KanjiSettingsBuilder();
});

test('Should render the correct text when the settings have grades', () => {
    settings.withGrades([KyoikuGrade.ONE, KyoikuGrade.TWO]);
    const { container } = render(<KanjiDataSettingsSummary settings={settings.build()} />);
    expect(container).toHaveTextContent('kanji from grades 1, 2');
});

test('Should render the correct text when the settings have tags', () => {
    settings.withTags(["time", "person"]);
    const { container } = render(<KanjiDataSettingsSummary settings={settings.build()} />);
    expect(container).toHaveTextContent('kanji tagged with time, person');
});

test('Should render the correct text when the settings have grades and tags', () => {
    settings.withTags(["time", "person"]).withGrades([KyoikuGrade.ONE]);
    const { container } = render(<KanjiDataSettingsSummary settings={settings.build()} />);
    expect(container).toHaveTextContent('kanji from grades 1 tagged with time, person');
});
