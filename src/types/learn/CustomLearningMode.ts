import LearningMode from "./LearningMode";
import { faVial } from "@fortawesome/free-solid-svg-icons";
import React, { ComponentClass } from "react";

export default class CustomLearningMode extends LearningMode {
    constructor(menu: React.FunctionComponent | ComponentClass<any>) {
        super("Custom", "#41d085", faVial, { }, true, menu);
    }
}