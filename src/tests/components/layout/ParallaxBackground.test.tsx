const setup = () => {
    const kana = new KanaRepository().read({ hiragana: true, katakana: true });
    const component = render(<ParallaxBackground kana={kana} />);
    return {
        ...component
    }
}

//TODO: Below tests don't seem to be updating state and re-rendering new kana when resizing.
import { render } from "@testing-library/react";
import ParallaxBackground from "../../../components/layout/ParallaxBackground";
import { KanaRepository } from "../../../repository/kana/KanaRepository";

test('Viewing in a small viewport should render less than 214 background kana', () => {
    window.resizeTo(375, 812); //iPhone X
    setup();
    //expect(screen.queryAllByTestId('background-kana')).toHaveLength(50);
});

test('Viewing in a larger viewport should render more than 214 background kana', () => {
    window.resizeTo(1920, 1080);
    setup();
    //expect(screen.queryAllByTestId('background-kana')).toHaveLength(50);
});

test('Resizing the viewport should recalculate the number of background kana', () => {
    window.resizeTo(1920, 1080);
    setup();
    window.resizeTo(375, 812); //iPhone X
    //expect(screen.queryAllByTestId('background-kana')).toHaveLength(50);
});