import { render } from "@testing-library/react";
import DynamicCharacter, { CharacterStyleProps } from "../../../components/game/DynamicCharacter";

test('Passing style size as \'sm\' should set the font-size to 3em', () => {
    const style: CharacterStyleProps = { size: 'sm' };
    const { container } = render(<DynamicCharacter value={'a'} style={style} />);
    expect(container?.firstChild).toHaveProperty('style._values.font-size', '3em');
});

test('Passing style size as \'md\' should set the font-size to 5em', () => {
    const style: CharacterStyleProps = { size: 'md' };
    const { container } = render(<DynamicCharacter value={'a'} style={style} />);
    expect(container?.firstChild).toHaveProperty('style._values.font-size', '5em');
});

test('Passing style size as \'lg\' should set the font-size to 8em', () => {
    const style: CharacterStyleProps = { size: 'lg' };
    const { container } = render(<DynamicCharacter value={'a'} style={style} />);
    expect(container?.firstChild).toHaveProperty('style._values.font-size', '8em');
});

test('Passing style size as \'xl\' should set the font-size to 10em', () => {
    const style: CharacterStyleProps = { size: 'xl' };
    const { container } = render(<DynamicCharacter value={'a'} style={style} />);
    expect(container?.firstChild).toHaveProperty('style._values.font-size', '10em');
});

test('Omitting the size from the style property should default the font-size to 1em', () => {
    const { container } = render(<DynamicCharacter value={'a'} />);
    expect(container?.firstChild).toHaveProperty('style._values.font-size', '1em');
});

test('Passing style colour should set the colour on the character', () => {
    const style: CharacterStyleProps = { color: '#4eadde' };
    const { container } = render(<DynamicCharacter value={'a'} style={style} />);
    expect(container?.firstChild).toHaveProperty('style._values.color', 'rgb(78, 173, 222)');
});

test('Passing a single class should set it on the character', () => {
    const classes = "exampleClass";
    const { container } = render(<DynamicCharacter value={'a'} classes={classes} />);
    expect(container?.firstChild).toHaveClass('exampleClass');
});

test('Passing an array of classes should set them all', () => {
    const classes = ["firstClass", "secondClass"];
    const { container } = render(<DynamicCharacter value={'a'} classes={classes} />);
    expect(container?.firstChild).toHaveClass('firstClass');
    expect(container?.firstChild).toHaveClass('secondClass');
});

test('Omitting the classes property should not set any classes to the character', () => {
    const { container } = render(<DynamicCharacter value={'a'} />);
    expect(container?.firstChild).not.toHaveClass();
});