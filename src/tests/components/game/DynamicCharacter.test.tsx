import { render } from "@testing-library/react"
import DynamicCharacter, { CharacterStyleProps } from "../../../components/game/DynamicCharacter"

describe("Font Size", () => {
    test("Passing style size as 'xs' should set the font-size to 2.5em", () => {
        const style: CharacterStyleProps = { size: "xs" }
        const { container } = render(<DynamicCharacter value={"あ"} style={style} />)
        expect(container?.firstChild).toHaveProperty("style._values.font-size", "2.5em")
    })

    test("Passing style size as 'sm' should set the font-size to 3em", () => {
        const style: CharacterStyleProps = { size: "sm" }
        const { container } = render(<DynamicCharacter value={"あ"} style={style} />)
        expect(container?.firstChild).toHaveProperty("style._values.font-size", "3em")
    })

    test("Passing style size as 'md' should set the font-size to 5em", () => {
        const style: CharacterStyleProps = { size: "md" }
        const { container } = render(<DynamicCharacter value={"あ"} style={style} />)
        expect(container?.firstChild).toHaveProperty("style._values.font-size", "5em")
    })

    test("Passing style size as 'lg' should set the font-size to 8em", () => {
        const style: CharacterStyleProps = { size: "lg" }
        const { container } = render(<DynamicCharacter value={"あ"} style={style} />)
        expect(container?.firstChild).toHaveProperty("style._values.font-size", "8em")
    })

    test("Passing style size as 'xl' should set the font-size to 10em", () => {
        const style: CharacterStyleProps = { size: "xl" }
        const { container } = render(<DynamicCharacter value={"あ"} style={style} />)
        expect(container?.firstChild).toHaveProperty("style._values.font-size", "10em")
    })
})

describe("Diagraph Margins", () => {
    //Left Diagraph Character

    test("Passing style size as 'xs' to a left diagraph character should set the right margin to -3px", () => {
        const style: CharacterStyleProps = { size: "xs" }
        const { container } = render(<DynamicCharacter value={"し"} style={style} isDiagraphLeft={true} />)
        expect(container?.firstChild).toHaveProperty("style._values.margin-right", "-3px")
    })

    test("Passing style size as 'sm' to a left diagraph character should set the right margin to -4px", () => {
        const style: CharacterStyleProps = { size: "sm" }
        const { container } = render(<DynamicCharacter value={"し"} style={style} isDiagraphLeft={true} />)
        expect(container?.firstChild).toHaveProperty("style._values.margin-right", "-4px")
    })

    test("Passing style size as 'md' to a left diagraph character should set the right margin to -5px", () => {
        const style: CharacterStyleProps = { size: "md" }
        const { container } = render(<DynamicCharacter value={"し"} style={style} isDiagraphLeft={true} />)
        expect(container?.firstChild).toHaveProperty("style._values.margin-right", "-5px")
    })

    test("Passing style size as 'lg' to a left diagraph character should set the right margin to -8px", () => {
        const style: CharacterStyleProps = { size: "lg" }
        const { container } = render(<DynamicCharacter value={"し"} style={style} isDiagraphLeft={true} />)
        expect(container?.firstChild).toHaveProperty("style._values.margin-right", "-8px")
    })

    test("Passing style size as 'xl' to a left diagraph character should set the right margin to -10px", () => {
        const style: CharacterStyleProps = { size: "xl" }
        const { container } = render(<DynamicCharacter value={"し"} style={style} isDiagraphLeft={true} />)
        expect(container?.firstChild).toHaveProperty("style._values.margin-right", "-10px")
    })

    //Right Diagraph Character

    test("Passing style size as 'xs' to a right diagraph character should set the left margin to -3px", () => {
        const style: CharacterStyleProps = { size: "xs" }
        const { container } = render(<DynamicCharacter value={"ゅ"} style={style} isDiagraphRight={true} />)
        expect(container?.firstChild).toHaveProperty("style._values.margin-left", "-3px")
    })

    test("Passing style size as 'sm' to a right diagraph character should set the left margin to -4px", () => {
        const style: CharacterStyleProps = { size: "sm" }
        const { container } = render(<DynamicCharacter value={"ゅ"} style={style} isDiagraphRight={true} />)
        expect(container?.firstChild).toHaveProperty("style._values.margin-left", "-4px")
    })

    test("Passing style size as 'md' to a right diagraph character should set the left margin to -5px", () => {
        const style: CharacterStyleProps = { size: "md" }
        const { container } = render(<DynamicCharacter value={"ゅ"} style={style} isDiagraphRight={true} />)
        expect(container?.firstChild).toHaveProperty("style._values.margin-left", "-5px")
    })

    test("Passing style size as 'lg' to a right diagraph character should set the left margin to -8px", () => {
        const style: CharacterStyleProps = { size: "lg" }
        const { container } = render(<DynamicCharacter value={"ゅ"} style={style} isDiagraphRight={true} />)
        expect(container?.firstChild).toHaveProperty("style._values.margin-left", "-8px")
    })

    test("Passing style size as 'xl' to a right diagraph character should set the left margin to -10px", () => {
        const style: CharacterStyleProps = { size: "xl" }
        const { container } = render(<DynamicCharacter value={"ゅ"} style={style} isDiagraphRight={true} />)
        expect(container?.firstChild).toHaveProperty("style._values.margin-left", "-10px")
    })
})

test("Omitting the size from the style property should default the font-size to undefined", () => {
    const { container } = render(<DynamicCharacter value={"a"} />)
    expect(container?.firstChild).not.toHaveProperty("style._values.font-size")
})

test("Passing style colour should set the colour on the character", () => {
    const style: CharacterStyleProps = { color: "#4eadde" }
    const { container } = render(<DynamicCharacter value={"a"} style={style} />)
    expect(container?.firstChild).toHaveProperty("style._values.color", "rgb(78, 173, 222)")
})

test("Passing a single class should set it on the character", () => {
    const classes = "exampleClass"
    const { container } = render(<DynamicCharacter value={"a"} classes={classes} />)
    expect(container?.firstChild).toHaveClass("exampleClass")
})

test("Passing an array of classes should set them all", () => {
    const classes = ["firstClass", "secondClass"]
    const { container } = render(<DynamicCharacter value={"a"} classes={classes} />)
    expect(container?.firstChild).toHaveClass("firstClass")
    expect(container?.firstChild).toHaveClass("secondClass")
})

test("Omitting the classes property should not set any classes to the character", () => {
    const { container } = render(<DynamicCharacter value={"a"} />)
    expect(container?.firstChild).not.toHaveClass()
})
