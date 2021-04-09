import { ChangeEvent, Component } from "react";
import { LifeQuantity } from "../../types/game/LifeQuantity";
import { Form } from "react-bootstrap";

interface LivesSelectorProps {
    onSelect: (quantity: LifeQuantity) => void;
    disabled?: boolean;
}

interface LivesSelectorState {
    selected: LifeQuantity;
}

class LivesSelector extends Component<LivesSelectorProps, LivesSelectorState> {
    constructor(props: LivesSelectorProps | Readonly<LivesSelectorProps>) {
        super(props);
        this.state = {
            selected: LifeQuantity.FIVE
        }
    }

    componentDidMount() {
        this.props.onSelect(LifeQuantity.FIVE);
    }

    componentDidUpdate(prevProps: Readonly<LivesSelectorProps>, prevState: Readonly<LivesSelectorState>) {
        if (prevState !== this.state) {
            this.props.onSelect(this.state.selected);
        }
    }

    render() {
        return (
            <Form.Control disabled={this.props.disabled} as="select" onChange={this.handleOnChange} data-testid="Lives">
                {this.getOptions()}
            </Form.Control>
        );
    }

    reset = () => this.setState({ selected: LifeQuantity.FIVE });

    private handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const value = Number(e.target.value);
        const quantity: LifeQuantity = value as LifeQuantity;
        this.setState({ selected: quantity });
        this.props.onSelect(quantity);
    }

    private getOptions = () => {
        return Object.keys(LifeQuantity)
            .map(k => Number(LifeQuantity[k as any]))
            .filter(k => !isNaN(k))
            .map(quantity => {
                return <option
                    key={quantity}
                    selected={this.state.selected.valueOf() === quantity}>
                    {quantity}
                </option>
            });
    }
}

export default LivesSelector;