import { Component } from "react"
import { GameQuestionProps } from "../../components/game/MemoryGame"

export default abstract class GameQuestion<P extends GameQuestionProps, S> extends Component<P, S> {
    abstract isCorrect: () => boolean
}
