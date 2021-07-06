import { faVial } from "@fortawesome/free-solid-svg-icons";
import React, { ComponentClass } from "react";
import LearnMode from "../session/LearnMode";
import { KanaSettingsBuilder } from "../session/settings/data/KanaSettings";
import LearnSettings from "../session/settings/LearnSettings";

export default class CustomLearningMode extends LearnMode {
    constructor(menu: React.FunctionComponent | ComponentClass<any>) {
        super("Custom", "#41d085", faVial, new KanaSettingsBuilder().build(), new LearnSettings(), true, menu);
    }
}