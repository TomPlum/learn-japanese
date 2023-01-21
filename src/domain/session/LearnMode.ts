import SessionMode from "./SessionMode"
import DataSettings from "./settings/data/DataSettings"
import LearnSettings from "./settings/LearnSettings"
import { CustomIcon } from "../Icon"

export default class LearnMode extends SessionMode {
    constructor(
        id: number,
        displayName: string,
        description: string,
        colour: string,
        icon: CustomIcon,
        dataSettings: DataSettings,
        settings: LearnSettings,
        topicName: string,
        shortName?: string,
        custom?: boolean,
        favouriteId?: number
    ) {
        super(
            id,
            displayName,
            description,
            colour,
            icon,
            dataSettings,
            settings,
            topicName,
            shortName,
            custom,
            favouriteId
        )
    }
}
