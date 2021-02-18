import {Component} from "react";
import {Button, Container, Form} from "react-bootstrap";

export interface TestSettings {
    includeHiragana: boolean;
    includeKatakana: boolean;
}

interface TestModeMenuProps {
    onStart: (settings: TestSettings) => void;
}

interface TestModeMenuState {
    selectedHiragana: boolean;
    selectedKatakana: boolean;
}

class TestModeMenu extends Component<TestModeMenuProps, TestModeMenuState> {
    constructor(props: TestModeMenuProps | Readonly<TestModeMenuProps>) {
        super(props);
        this.state = {
            selectedHiragana: true,
            selectedKatakana: false
        }
    }

    render() {
        const { selectedHiragana, selectedKatakana } = this.state;

        return (
            <Container>
                <Form>
                    <Form.Row>
                        <Form.Label>Test Settings</Form.Label>
                    </Form.Row>
                    <Form.Row>
                        <Form.Check
                            inline
                            label="Hiragana"
                            checked={selectedHiragana}
                            onChange={() => this.setState({selectedHiragana: !selectedHiragana})}
                            disabled={selectedHiragana && !selectedKatakana}
                        />
                        <Form.Check
                            inline
                            label="Katakana"
                            checked={selectedKatakana}
                            onChange={() => this.setState({selectedKatakana: !selectedKatakana})}
                            disabled={selectedKatakana && !selectedHiragana}
                        />
                    </Form.Row>
                    <Form.Row>
                        <Button onClick={this.onStartTest.bind(this)}>Start</Button>
                    </Form.Row>
                </Form>
            </Container>
        );
    }

    onStartTest = () => {
        const { selectedHiragana, selectedKatakana } = this.state;
        this.props.onStart({includeHiragana: selectedHiragana, includeKatakana: selectedKatakana});
    }
}

export default TestModeMenu;