import { Component } from "react";
import { Kana } from "../../types/Kana";

interface KanaOptionProps {
    value: Kana;
}

class KanaOption extends Component<KanaOptionProps> {
    render() {
        return (
            <p>l</p>
        );
    }
}

export default KanaOption;