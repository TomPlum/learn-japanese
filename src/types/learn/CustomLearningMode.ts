import { faVial } from "@fortawesome/free-solid-svg-icons";
import React, { ComponentClass } from "react";
import SessionMode from "../session/SessionMode";
import LearnMode from "../session/LearnMode";
import { KanaSettingsBuilder, LearnSettings } from "../session/DataSettings";

export default class CustomLearningMode extends LearnMode {
    constructor(menu: React.FunctionComponent | ComponentClass<any>) {
        super("Custom", "#41d085", faVial, new KanaSettingsBuilder().build(), new LearnSettings(), true, menu);
    }
}