import KanaMemoryTest, { KanaMemoryTestProps } from "../../../components/game/KanaMemoryTest";
import { hiragana } from "../../_test-data";
import { render } from "@testing-library/react";

describe('KanaMemoryTest', () => {
    describe('Immediately After Mount', () => {
        const onClose = jest.fn();
        const onFinish = jest.fn();

        jest.mock('../../utility/RandomNumberGenerator.ts', () => ({
           RandomNumberGenerator: {
               getRandomArrayIndex: jest.fn().mockReturnValue(0)
           }
        }));

        const props: KanaMemoryTestProps = {
            kana: hiragana,
            settings: {
                kana: { hiragana: true },
                hints: { enabled: true, quantity: 999 },
                lives: { enabled: false },
                time: { timed: false, countdown: false }
            },
            onClose: onClose,
            onFinish: onFinish,
        };

        const component = render(<KanaMemoryTest {...props} />);

        it('should initialise the state correctly', () => {
            const state = component.state();
        });
    });
});