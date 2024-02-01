import Copyable from "../../Copyable"
import Inspectable from "../../Inspectable"
import KanjiReadingDisplay from "../../../learn/kanji/KanjiReadingDisplay"
import { ReadingType } from "types/kanji/ReadingType"
import LoadingSpinner from "../../loading/LoadingSpinner"
import styles  from "./InformationalKanji.module.scss"
import useGetKanjiByCharacter from "api/hooks/kanji/useGetKanjiByCharacter";

export interface InformationalKanjiProps {
  value: string
  className?: string
}

const InformationalKanji = ({ value, className }: InformationalKanjiProps) => {
  const { data: kanji, isPending } = useGetKanjiByCharacter({ character: value })

  const overlay = (
    <div key={`${value}-popover`} data-testid={`${value}-information`}>
      <LoadingSpinner
        active={isPending}
        variant="primary"
      />

      <KanjiReadingDisplay
        showRomaji={false}
        type={ReadingType.ON}
        readings={kanji?.getOnyomiReadings() ?? []}
      />

      <KanjiReadingDisplay
        showRomaji={false}
        type={ReadingType.KUN}
        readings={kanji?.getKunyomiReadings() ?? []}
      />
    </div>
  )

  const title = kanji?.getMeanings().slice(0, 4).join(", ") ?? "Loading..."
  const popover = { title: title, text: overlay, className: styles.popover }

  return (
    <Copyable className={className} placement="top" key={`copyable${value}`} inline>
      <Inspectable key={`inspectable-${value}`} placement="top" className={className} popover={popover}>
        <span key={value}>
          {value}
        </span>
      </Inspectable>
    </Copyable>
  )
}

export default InformationalKanji
