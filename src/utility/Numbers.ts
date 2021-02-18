export class Numbers {
    static randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
}