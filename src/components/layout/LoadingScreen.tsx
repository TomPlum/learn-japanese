import LoadingSpinner from "../ui/LoadingSpinner";

const LoadingScreen = (props: { message: string }) => {
    return (
        <div>
            <LoadingSpinner active={true} />
            <p>{props.message}</p>
        </div>
    )
}
