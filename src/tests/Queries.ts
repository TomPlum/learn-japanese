import { Matcher, screen } from "@testing-library/react"
import { Mock } from "vitest";

export const getByTextWithMarkup = (text: string) => {
  const hasText = (node: Element) => node.textContent === text
  return screen.getByText((_: any, node: any) => {
    const childrenDontHaveText = Array.from(node.children).every((child) => !hasText(child as Element))
    return hasText(node) && childrenDontHaveText
  })
}

export const findByTextWithMarkup = async (text: string) => {
  const hasText = (node: Element) => node.textContent === text
  return screen.findByText((_: any, node: any) => {
    const childrenDontHaveText = Array.from(node.children).every((child) => !hasText(child as Element))
    return hasText(node) && childrenDontHaveText
  })
}

export const getByTextWithElements = (text: string): HTMLElement => {
  return screen.getByText((content: Matcher, element: any) => {
    return content !== "" && element && element.textContent === text
  })
}

export const getAllByTextWithElements = (text: string): HTMLElement[] => {
  return screen.getAllByText((content: Matcher, element: any) => {
    return content !== "" && element && element.textContent === text
  })
}

export const findByTextWithElements = async (text: string): Promise<HTMLElement> => {
  return await screen.findByText((content: Matcher, element: any) => {
    return content !== "" && element && element.textContent === text
  })
}

export const findAllByTextWithElements = async (text: string): Promise<HTMLElement[]> => {
  return await screen.findAllByText((content: Matcher, element: any) => {
    return content !== "" && element && element.textContent === text
  })
}

/**
 * Returns the value of the first parameter of the last call to the given function.
 * @see https://jestjs.io/docs/mock-functions#mock-property
 * @param fn A Jest Mock function
 * @return value of the first parameter
 */
export const getValueLastCalledWith = <T>(fn: Mock): T => {
  const calls = fn.mock.calls
  const lastCall = calls[calls.length - 1]
  return lastCall[0] //First arg
}
