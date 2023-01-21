import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade"
import { Form } from "react-bootstrap"

interface KyoikuGradeRadioButtonProps {
    grade: KyoikuGrade
    selected: boolean
    onClick: (grade: KyoikuGrade) => void
}

const KyoikuGradeRadioButton = (props: KyoikuGradeRadioButtonProps) => {
    const { grade, selected, onClick } = props

    return (
        <Form.Check
            inline
            type="checkbox"
            checked={selected}
            id={grade.value.toString()}
            label={`Grade ${grade.value}`}
            onChange={() => onClick(grade)}
        />
    )
}

export default KyoikuGradeRadioButton
