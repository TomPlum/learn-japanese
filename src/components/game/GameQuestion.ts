import { Component } from "react";
import { GameQuestionProps } from "./KanaMemoryGame";

export default abstract class GameQuestion<P extends GameQuestionProps, S> extends Component<P, S> {
    abstract isCorrect: () => boolean;
}