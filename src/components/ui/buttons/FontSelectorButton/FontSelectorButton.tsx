import { useEffect, useState } from "react"
import { faCheck, faFont } from "@fortawesome/free-solid-svg-icons"
import menuStyles from "components/layout/NavigationBar/NavigationBar.module.scss"
import NavigationButton from "../../NavigationButton"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import styles from "./FontSelectorButton.module.scss"
import { useTranslation } from "react-i18next"
import { useFontContext } from "context/FontContext";
import useFonts from "hooks/useFonts";
import { Font, FontSelectorProps } from "components/ui/buttons/FontSelectorButton/types.ts";

const FontSelectorButton = (props: FontSelectorProps) => {
  const defaultFont = { name: "Default", slug: "default" }

  const [open, setOpen] = useState(false)
  const [map, setMap] = useState(new Map())
  const [loading, setLoading] = useState(false)
  const [fonts, setFonts] = useState<Font[]>([])
  const [selected, setSelected] = useState<Font>(defaultFont)

  const { getSelectedFont, getFonts } = useFonts()
  const { t } = useTranslation("translation", { keyPrefix: "settings.modal.interface.kanji-font.options" })

  useEffect(() => {
    setLoading(true)

    const selected = getSelectedFont()

    if (selected) {
      setSelected(selected)
    }

    setLoading(false)
  }, [getSelectedFont])

  useEffect(() => {
    setLoading(true)
    getFonts()
      .then((response) => {
        setFonts(response)
        setMap(new Map(response.map((font) => [t(font.slug), font.slug])))
      })
      .finally(() => {
        setLoading(false)
      })
  }, [getFonts])

  const { setFont } = useFontContext()

  const handleSelect = (value: string) => {
    const selected = fonts.find((font) => font.slug === map.get(value)) ?? defaultFont
    setSelected(selected)
    setFont(selected.name)
  }

  return (
    <NavigationButton
      searchable
      icon={faFont}
      loading={loading}
      id="font-selector"
      showItemQuantity={4}
      menuClass={styles.menu}
      onShow={() => setOpen(true)}
      onHide={() => setOpen(false)}
      textClass={menuStyles.linkText}
      containerClass={props.className}
      iconClass={[menuStyles.icon, open ? styles.highlight : styles.icon].join(" ")}
    >
      {fonts.map((font: Font) => {
        const isSelected = selected === font

        return (
          <NavigationButton.Item
            key={font.slug}
            onClick={handleSelect}
            className={styles.font}
            style={{ fontFamily: font.name }}
            containerClass={styles.fontContainer}
            icon={isSelected ? faCheck : faCircle}
            iconClass={isSelected ? styles.selected : styles.inactive}
          >
            {t(font.slug)}
          </NavigationButton.Item>
        )
      })}
    </NavigationButton>
  )
}

export default FontSelectorButton
