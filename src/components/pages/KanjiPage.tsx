import { Component } from "react";
import LearnKanji from "../learn/kanji/LearnKanji";
import { Kanji } from "../../types/kanji/Kanji";
import { KanjiRepository, KanjiSettings } from "../../repository/KanjiRepository";
import LoadingSpinner from "../ui/LoadingSpinner";
import KanjiSettingsMenu from "../settings/KanjiSettingsMenu";

interface KanjiPageState {
    data: Kanji[];
    loading: boolean;
    settings?: KanjiSettings;
}

class KanjiPage extends Component<any, KanjiPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            loading: false,
            settings: undefined
        }
    }

    render() {
        const { data, loading, settings } = this.state;
        return (
            <>
                <LoadingSpinner active={loading} />
                {data.length === 0 && <KanjiSettingsMenu onSelected={this.onSelectedKanji} />}
                {settings && data.length > 0 && <LearnKanji kanji={data} />}
            </>
        );
    }

    private onSelectedKanji = (settings: KanjiSettings) => {
        this.setState({ settings }, this.loadKanji);
    }

    private loadKanji = () => {
        this.setState({ loading: true });
        const kanji = new KanjiRepository().read(this.state.settings);
        this.setState({ loading: false, data: kanji });
    }
}

export default KanjiPage;