import { Component } from "react";

export default abstract class KanaQuestion<P, S> extends Component<P, S> {
    abstract isCorrect: () => boolean;
}