import { ChangeEvent, Component } from "react";
import { LifeQuantity } from "../../types/LifeQuantity";
import { Form } from "react-bootstrap";

interface LivesSelectorProps {
    onSelect: (quantity: LifeQuantity) => void;
}

class LivesSelector extends Component<LivesSelectorProps> {
    render() {
        return (
            <Form.Control as="select" onChange={this.handleOnChange}>
                {this.getOptions()}
            </Form.Control>
        );
    }

    private handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const value = Number(e.target.value);
        const quantity: LifeQuantity = value as LifeQuantity;
        this.props.onSelect(quantity);
    }

    private getOptions = () => {
        return Object.keys(LifeQuantity)
            .map(k => Number(LifeQuantity[k as any]))
            .filter(k => !isNaN(k))
            .map(quantity => {
                return <option key={quantity}>{quantity}</option>
            });
    }
}

export default LivesSelector;