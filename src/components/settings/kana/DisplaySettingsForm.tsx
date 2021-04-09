import { Component } from "react";
import { DisplaySettings } from "../../../types/game/GameSettings";
import { DisplayType } from "../../../types/game/DisplayType";
import DisplayTypeButton from "../../ui/DisplayTypeButton";
import { faFont, faGripVertical, faSquare, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import { Environment } from "../../../utility/Environment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/sass/components/settings/kana/DisplaySettingsForm.module.scss";
import KanaQuantityButton from "../../ui/KanaQuantityButton";

export interface DisplaySettingsFormProps {
    onChange: (settings: DisplaySettings) => void;
}

interface DisplaySettingsFormState {
    type: DisplayType;
    cards: number;
}

class DisplaySettingsForm extends Component<DisplaySettingsFormProps, DisplaySettingsFormState> {

    private readonly defaultState = { type: DisplayType.ROMAJI, cards: 1, };

    constructor(props: Readonly<DisplaySettingsFormProps> | DisplaySettingsFormProps) {
        super(props);
        this.state = this.defaultState;
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<DisplaySettingsFormProps>, prevState: Readonly<DisplaySettingsFormState>) {
        if (prevState !== this.state) {
            const { type, cards } = this.state;
            this.props.onChange({ type, cards });
        }
    }

    render() {
        const { type, cards } = this.state;

        return (
            <Row>
                <Col xs={12} className={styles.descriptionWrapper}>
                    <span className={styles.description}>{this.getDescription()}</span>
                </Col>
                <Col>
                    <DisplayTypeButton
                        icon={faFont}
                        type={DisplayType.ROMAJI}
                        selected={type}
                        onClick={(type) => this.setState({ type, cards: 1 })}
                    />
                </Col>
                <Col>
                    <DisplayTypeButton
                        icon={faThLarge}
                        type={DisplayType.KANA}
                        selected={type}
                        onClick={(type) => this.setState({ type, cards: 4 })}
                    />
                </Col>
                {type === DisplayType.KANA && <Col xs={12}>
                    <Row>
                        <Col xs={12}>
                            <p className={styles.quantityDescription}>You'll be shown {cards} kana to choose from.</p>
                        </Col>
                        <Col>
                            <KanaQuantityButton cards={2} selected={cards} onClick={(quantity => this.handleQuantitySelect(quantity))}>
                                <span className={"fa-layers fa-fw " + styles.cardsIcon}>
                                    <FontAwesomeIcon fixedWidth icon={faSquare} transform="left-5 shrink-8" />
                                    <FontAwesomeIcon fixedWidth icon={faSquare} transform="right-5 shrink-8" />
                                </span>
                            </KanaQuantityButton>
                        </Col>
                        <Col>
                            <KanaQuantityButton cards={4} selected={cards} onClick={(quantity) => this.handleQuantitySelect(quantity)}>
                                <FontAwesomeIcon fixedWidth className={styles.cardsIcon} icon={faThLarge} />
                            </KanaQuantityButton>
                        </Col>
                        <Col>
                            <KanaQuantityButton cards={6} selected={cards} onClick={(quantity => this.handleQuantitySelect(quantity))}>
                                <FontAwesomeIcon fixedWidth className={styles.cardsIcon} icon={faGripVertical} transform="grow-4" />
                            </KanaQuantityButton>
                        </Col>
                    </Row>
                </Col>}
            </Row>
        );
    }

    reset = () => this.setState(this.defaultState);

    private handleQuantitySelect = (quantity: number) => {
        this.setState({ cards: quantity });
    }

    private getDescription = () => Environment.variable(this.state.type + "_MODE_DESC");
}

export default DisplaySettingsForm;