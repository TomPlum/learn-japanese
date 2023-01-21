import SessionMode from "./SessionMode"
import DataSettings from "./settings/data/DataSettings"
import GameSettings from "./settings/game/GameSettings"
import { CustomIcon } from "../Icon"

export default class PlayMode extends SessionMode {
    constructor(
        id: number,
        displayName: string,
        description: string,
        colour: string,
        icon: CustomIcon,
        dataSettings: DataSettings,
        gameSettings: GameSettings,
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
            gameSettings,
            topicName,
            shortName,
            custom,
            favouriteId
        )
    }
}
