import FilterChain from "../../filters/FilterChain"
import { Kana } from "../kana/Kana"
import DiagraphFilter from "../../filters/kana/DiagraphFilter"
import KanaTypeFilter from "../../filters/kana/KanaTypeFilter"
import { Learnable } from "../learn/Learnable"

export type WrongAnswerFilter<T extends Learnable> = (data: T) => FilterChain<T>

class AnswerFilterRegistry {
    private static readonly _map = new Map<number, WrongAnswerFilter<any>>([
        [
            1,
            (data: Learnable) => {
                console.log(data)
                return new FilterChain<Kana>()
                    .withFilter(new DiagraphFilter((data as Kana).isDiagraph()))
                    .withFilter(new KanaTypeFilter((data as Kana).type, true))
            }
        ]
    ])

    /**
     * @see getFilter
     * @private Not to be instantiated.
     */
    private constructor() {}

    /**
     * Retrieves the answer filter with the given ID.
     * @param id The ID of the filter.
     * @returns The matching filter or a default if not found.
     */
    public static getFilter(id?: number): WrongAnswerFilter<any> {
        const defaultFilter = () => new FilterChain()
        return this._map.get(id ?? -1) ?? defaultFilter
    }
}

export default AnswerFilterRegistry
