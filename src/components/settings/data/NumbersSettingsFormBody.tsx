import styles from "../../../styles/sass/components/settings/data/NumbersSettingsForm.module.scss";
import { DataSettingsStepFormProps } from "../../layout/wizard/steps/DataSettingsStep";
import NumbersSettings, { NumbersSettingsBuilder } from "../../../domain/session/settings/data/NumbersSettings";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ToggleSwitch from "../../ui/ToggleSwitch";
import QuantityField from "../../ui/fields/QuantityField";

const NumbersSettingsFormBody = (props: DataSettingsStepFormProps<NumbersSettings>) => {
    const { className, isValid, onChange } = props;

    const [numbers, setNumbers] = useState(true);
    const [counters, setCounters] = useState(true);
    const [age, setAge] = useState(true);
    const [exceptions, setExceptions] = useState(true);
    const [units, setUnits] = useState(true);
    const [sequence, setSequence] = useState(true);
    const [quantity, setQuantity] = useState(25);

    useEffect(() => {
        const settings = new NumbersSettingsBuilder()
            .withExceptions(exceptions)
            .withSequence(sequence)
            .withCounters(counters)
            .withQuantity(quantity)
            .withNumbers(numbers)
            .withUnits(units)
            .withAge(age)
            .build();

        onChange(settings);
        isValid?.(validate());
    }, [numbers, counters, age, exceptions, units, sequence, quantity]);

    const validate = () => {
        return !!quantity && quantity > 0;
    }

    return (
        <div className={className}>
            <Row>
                <Col>
                    <ToggleSwitch
                        label="Numbers"
                        enabled={numbers}
                        data-testid="numbers"
                        className={styles.switch}
                        onChange={() => setNumbers(!numbers)}
                    />

                    <p className={numbers ? styles.description : styles.disabled}>
                        Include numbers 0-10, one hundred, thousand, ten thousand, one hundred million and 1 billion.
                    </p>

                    <ToggleSwitch
                        label="Counters"
                        enabled={counters}
                        data-testid="counters"
                        className={styles.switch}
                        onChange={() => setCounters(!counters)}
                    />

                    <p className={counters ? styles.description : styles.disabled}>
                        The Japanese language has lots of counters. Includes the 350 most commonly used counters, sourced
                        from <a target="_blank" href="https://www.tofugu.com/japanese/japanese-counters-list/">tofugu.com</a>.
                    </p>

                    <ToggleSwitch
                        label="Age"
                        enabled={age}
                        data-testid="age"
                        className={styles.switch}
                        onChange={() => setAge(!age)}
                    />

                    <p className={age ? styles.description : styles.disabled}>
                        Exceptional pronunciations of numbers when referring to someone's ages in years.
                    </p>

                    <ToggleSwitch
                        label="Exceptions"
                        enabled={exceptions}
                        data-testid="exceptions"
                        className={styles.switch}
                        onChange={() => setExceptions(!exceptions)}
                    />

                    <p className={exceptions ? styles.description : styles.disabled}>
                        Exceptional readings for specific numbers and figures.
                    </p>

                    <ToggleSwitch
                        label="Units"
                        enabled={units}
                        data-testid="units"
                        className={styles.switch}
                        onChange={() => setUnits(!units)}
                    />

                    <p className={units ? styles.description : styles.disabled}>
                        Units of measurement that follow a number.
                    </p>

                    <ToggleSwitch
                        label="Sequence"
                        enabled={sequence}
                        data-testid="sequence"
                        className={styles.switch}
                        onChange={() => setSequence(!sequence)}
                    />

                    <p className={sequence ? styles.description : styles.disabled}>
                        Can't remember what this was supposed to be.
                    </p>

                    <QuantityField
                        value={quantity}
                        isValid={validate}
                        className={styles.quantity}
                        onChange={(value: number) => setQuantity(value)}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default NumbersSettingsFormBody;
