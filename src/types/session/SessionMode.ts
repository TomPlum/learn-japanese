import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import DataSettings from "./settings/data/DataSettings"
import ModeSettings from "./settings/ModeSettings"
import { GridItem } from "../../components/layout/wizard/grid/GridItem"
import { CustomIcon } from "../Icon"

abstract class SessionMode implements GridItem {
  protected readonly _id: number
  private readonly _favourite_id: number | undefined
  private readonly _displayName: string
  private readonly _description: string
  private readonly _colour: string
  private readonly _icon: IconDefinition | string
  private readonly _dataSettings: DataSettings
  private readonly _modeSettings: ModeSettings
  private readonly _topicName: string
  private readonly _shortName?: string
  private readonly _custom?: boolean

  protected constructor(
    id: number,
    displayName: string,
    description: string,
    colour: string,
    icon: CustomIcon,
    dataSettings: DataSettings,
    modeSettings: ModeSettings,
    topicName: string,
    shortName?: string,
    custom?: boolean,
    favouriteId?: number
  ) {
    this._id = id
    this._displayName = displayName
    this._description = description
    this._colour = colour
    this._icon = icon
    this._favourite_id = favouriteId
    this._dataSettings = dataSettings
    this._modeSettings = modeSettings
    this._topicName = topicName
    this._shortName = shortName
    this._custom = custom
  }

  get id(): number {
    return this._id
  }

  get favourite_id(): number | undefined {
    return this._favourite_id
  }

  get displayName(): string {
    return this._displayName
  }

  get description(): string {
    return this._description
  }

  get colour(): string {
    return this._colour
  }

  get icon(): CustomIcon {
    return this._icon
  }

  get dataSettings(): DataSettings {
    return this._dataSettings
  }

  get modeSettings(): ModeSettings {
    return this._modeSettings
  }

  get topicName(): string {
    return this._topicName
  }

  get custom(): boolean {
    return this._custom ?? false
  }

  isFavourite(): boolean {
    return !!this._favourite_id
  }

  getLongName(): string {
    return this._displayName
  }

  getShortName(): string {
    return this._shortName ?? this._displayName
  }
}

export default SessionMode
