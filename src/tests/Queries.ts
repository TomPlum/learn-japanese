import { screen } from '@testing-library/react'

/*export const getByTextWithMarkup = (text: string) => {
    screen.getByText((content, node) => {
        const hasText = (node: HTMLElement) => node.textContent === text
        const childrenDontHaveText = Array.from(node.children).every(
            child => !hasText(child as HTMLElement)
        )
        return hasText(node) && childrenDontHaveText
    })
}*/

export const getByTextWithMarkup = (text: string) => {
    const hasText = (node: Element) => node.textContent === text;
    // @ts-ignore
    return screen.getByText((_: any, node: Element) => {
        const childrenDontHaveText = Array.from(node.children).every(child => !hasText(child));
        return hasText(node) && childrenDontHaveText;
    });
};

export const getByTextWithElements = (text: string): HTMLElement => {
    // @ts-ignore
    return screen.getByText((content, element) => {
        return content !== '' && element && element.textContent === text;
    });
}