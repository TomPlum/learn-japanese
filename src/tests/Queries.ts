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

/**
 * Returns the value of the first parameter of the last call to the given function.
 * @see https://jestjs.io/docs/mock-functions#mock-property
 * @param fn A Jest Mock function
 * @return value of the first parameter
 */
export const getValueLastCalledWith = <T>(fn: jest.Mock): T => {
    const calls = fn.mock.calls;
    const lastCall = calls[calls.length - 1];
    return lastCall[0]; //First arg
}