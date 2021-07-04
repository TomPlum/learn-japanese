import SessionMode from "./SessionMode";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import DataSettings, { LearnSettings } from "./DataSettings";

export default class LearnMode extends SessionMode {
    constructor(displayName: string, colour: string, icon: IconDefinition | string, dataSettings: DataSettings, settings: LearnSettings,
                  custom = false, menu: React.FunctionComponent | React.ComponentClass<any> | undefined = undefined) {
        super(displayName, colour, icon, dataSettings, settings, custom, menu);
    }
}