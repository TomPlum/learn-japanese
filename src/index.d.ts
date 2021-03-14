export {};

declare global {
    namespace jest {
        interface Matchers<R> {
            toHaveStyleProperty(style: string, value: string): R;
        }
    }
}