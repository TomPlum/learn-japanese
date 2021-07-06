import SessionMode from "./SessionMode";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import DataSettings from "./settings/data/DataSettings";
import GameSettings from "./settings/GameSettings";

export default class PlayMode extends SessionMode {
    constructor(displayName: string, colour: string, icon: IconDefinition | string, dataSettings: DataSettings, gameSettings: GameSettings,
              custom = false, menu: React.FunctionComponent | React.ComponentClass<any> | undefined = undefined) {
        super(displayName, colour, icon, dataSettings, gameSettings, custom, menu);
    }
}