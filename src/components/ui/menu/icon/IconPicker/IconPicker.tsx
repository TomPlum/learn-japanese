import styles  from "./IconPicker.module.scss"
import { useState } from "react"
import { Form, OverlayTrigger, Popover } from "react-bootstrap"
import { iconList } from "../../../../../icons"
import { CustomIcon } from "../../../../../domain/Icon"
import Icon from "./../Icon"
import LocalStorageService from "../../../../../service/LocalStorageService"
import ScrollableContainer from "../../../ScrollableContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaintBrush, faRandom } from "@fortawesome/free-solid-svg-icons"
import { Numbers } from "../../../../../utility/Numbers"
import ColourPicker from "../../colour/ColourPicker"

export interface IconPickerProps {
  size?: string
  className?: string
  onSelect: (icon: CustomIcon, colour: string) => void
}

const IconPicker = (props: IconPickerProps) => {
  const { size, className, onSelect } = props

  const localStorageService = new LocalStorageService()
  const recentlyUsed = localStorageService.getRecentlyUsedIcons()

  const [show, setShow] = useState(false)
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<CustomIcon>("FaRocket")
  const [colour, setColour] = useState("#FFFFFF")
  const [showPicker, setShowPicker] = useState(false)

  const handleSelect = (icon: CustomIcon) => {
    setSearch("")
    setShow(false)
    onSelect(icon, colour)
    setSelected(icon)
    localStorageService.addRecentlyUsedIcon(icon)
  }

  const handleRandomise = () => {
    const index = Numbers.randomInt(0, iconList.length - 1)
    const icon = iconList[index]
    handleSelect(icon)
  }

  const handleChangeColour = (colour: string) => {
    setColour(colour)
  }

  let icons: CustomIcon[] = iconList.filter((name) => !recentlyUsed.includes(name))
  icons.unshift(...recentlyUsed)
  icons = icons
    .filter((it) => !!it)
    .filter((name) => name.toString().toLowerCase().includes(search.toLowerCase()))
    .slice(0, 25 - recentlyUsed.length)

  const popover = (
    <Popover id="icon-picker" data-testid="icon-picker" className={styles.popover}>
      <Popover.Content>
        {showPicker && (
          <ColourPicker className={styles.picker} onChange={handleChangeColour} onClose={() => setShowPicker(false)} />
        )}

        {!showPicker && (
          <div className={styles.inputWrapper}>
            <Form.Control
              type="text"
              value={search}
              id="icon-picker-search"
              className={styles.search}
              isInvalid={icons.length === 0}
              data-testid="icon-picker-search"
              placeholder="Search for an icon"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FontAwesomeIcon
              fixedWidth
              icon={faRandom}
              title="Randomise"
              onClick={handleRandomise}
              className={styles.random}
            />
            <FontAwesomeIcon
              fixedWidth
              icon={faPaintBrush}
              title="Pick Colour"
              className={styles.colour}
              onClick={() => setShowPicker(true)}
            />
          </div>
        )}

        {!showPicker && (
          <ScrollableContainer className={styles.iconContainer} maxHeight={180}>
            {icons.map((icon: CustomIcon) => (
              <Icon value={icon} key={icon.toString()} onClick={handleSelect} className={styles.icon} />
            ))}
          </ScrollableContainer>
        )}
        <div>{icons.length === 0 && <p className={styles.notFound}>{`No icons found for "${search}".`}</p>}</div>
      </Popover.Content>
    </Popover>
  )

  return (
    <div className={[className, styles.wrapper].join(" ")}>
      <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={popover}
        show={show}
        onToggle={() => setShow(!show)}
        rootClose={true}
      >
        <div>
          <Icon
            size={size}
            value={selected}
            style={{ color: colour }}
            className={styles.selected}
            data-testid="icon-picker-selected"
          />
        </div>
      </OverlayTrigger>
    </div>
  )
}

export default IconPicker
