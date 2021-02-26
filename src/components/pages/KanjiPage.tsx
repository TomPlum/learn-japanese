import { Component } from "react";
import LearnKanji from "../learn/LearnKanji";
import { Kanji } from "../../types/kanji/Kanji";
import { KanjiRepository } from "../../repository/KanjiRepository";
import LoadingSpinner from "../ui/LoadingSpinner";
import KanjiSettingsMenu from "../settings/KanjiSettingsMenu";

interface KanjiPageState {
    data: Kanji[];
    loading: boolean;
    grade: number;
}

class KanjiPage extends Component<any, KanjiPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            loading: false,
            grade: 1
        }
    }

    render() {
        const { data, loading, grade } = this.state;
        return (
            <>
                <LoadingSpinner active={loading} />
                {data.length === 0 && <KanjiSettingsMenu onSelected={this.onSelectedGrade} />}
                {grade && data.length > 0 && <LearnKanji kanji={data} />}
            </>
        );
    }

    private onSelectedGrade = (grade: number) => {
        this.loadKanji();
        this.setState({ grade });
    }

    private loadKanji = () => {
        this.setState({ loading: true });
        const kanji = new KanjiRepository().read({ grades: [this.state.grade ?? 1] });
        this.setState({ loading: false, data: kanji });
    }
}

export default KanjiPage;