import { Component } from "react";
import LearnKanji from "../learn/LearnKanji";
import { Kanji } from "../../types/kanji/Kanji";
import { KanjiRepository } from "../../repository/KanjiRepository";
import LoadingSpinner from "../ui/LoadingSpinner";
import KanjiSettingsMenu from "../settings/KanjiSettingsMenu";

interface KanjiPageState {
    data: Kanji[];
    loading: boolean;
    grades: number[];
}

class KanjiPage extends Component<any, KanjiPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            loading: false,
            grades: []
        }
    }

    render() {
        const { data, loading, grades } = this.state;
        return (
            <>
                <LoadingSpinner active={loading} />
                {data.length === 0 && <KanjiSettingsMenu onSelected={this.onSelectedGrade} />}
                {grades && data.length > 0 && <LearnKanji kanji={data} />}
            </>
        );
    }

    private onSelectedGrade = (grades: number[]) => {
        this.loadKanji();
        this.setState({ grades: grades });
    }

    private loadKanji = () => {
        this.setState({ loading: true });
        const kanji = new KanjiRepository().read({ grades: this.state.grades });
        this.setState({ loading: false, data: kanji });
    }
}

export default KanjiPage;