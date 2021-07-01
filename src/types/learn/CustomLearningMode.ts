import { faVial } from "@fortawesome/free-solid-svg-icons";
import React, { ComponentClass } from "react";
import SessionMode from "../SessionMode";

export default class CustomLearningMode extends SessionMode {
    constructor(menu: React.FunctionComponent | ComponentClass<any>) {
        super("Custom", "#41d085", faVial, { }, true, menu);
    }
}