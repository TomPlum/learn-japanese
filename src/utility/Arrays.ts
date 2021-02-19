export class Arrays {
    static intersect<T>(arr1: T[], arr2: T[]): T[] {
        if (arr1.length > arr2.length) {
            return arr1.filter(element => arr2.indexOf(element) < 0);
        } else {
            return arr2.filter(element => arr1.indexOf(element) < 0);
        }
    }
}