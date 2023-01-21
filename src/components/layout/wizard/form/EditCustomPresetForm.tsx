import { Button } from "react-bootstrap"
import SessionMode from "../../../../domain/session/SessionMode"

export interface EditCustomPresetFormProps {
    preset: SessionMode
    onClose: () => void
}

const EditCustomPresetForm = (props: EditCustomPresetFormProps) => {
    const { preset, onClose } = props

    return (
        <div data-testid="edit-custom-preset-form">
            <p>{preset.displayName}</p>
            <Button variant="danger" onClick={onClose}>
                Discard
            </Button>
            <Button variant="info">Save</Button>
        </div>
    )
}

export default EditCustomPresetForm
