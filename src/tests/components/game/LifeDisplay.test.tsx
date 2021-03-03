import LifeDisplay, { LifeDisplayProps } from "../../../components/game/LifeDisplay";
import { render, screen } from "@testing-library/react";

let props: LifeDisplayProps = {
    hearts: 5
};

const setup = () => {
    const component = render(<LifeDisplay {...props} />);
    return {
        icon: component.getByTitle('Lives'),
        ...component
    }
}

test('Should Render Heart Icon', () => {
   const { icon } = setup();
   expect(icon).toBeInTheDocument();
});

test('Should Render Initial Lives Quantity', () => {
   setup();
   expect(screen.getByText('5')).toBeInTheDocument();
});

test('Should Render Infinity Symbol When Lives -> 999', () => {
    props.hearts = 999;
    setup();
    expect(screen.getByTitle('Infinite')).toBeInTheDocument();
});