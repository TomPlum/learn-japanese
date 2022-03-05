import { Button } from "react-bootstrap";

export interface EditCustomPresetFormProps {
    onClose: () => void;
}

const EditCustomPresetForm = (props: EditCustomPresetFormProps) => {

    const { onClose } = props;

    return (
        <div>
            <p>Yo!</p>
            <Button variant="danger" onClick={onClose}>Discard</Button>
            <Button variant="info">Save</Button>
        </div>
    )
}

export default EditCustomPresetForm;
