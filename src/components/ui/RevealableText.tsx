import { Component } from "react"
import styles from "../../styles/sass/components/ui/RevealableText.module.scss"

export interface RevealableTextProps {
    value: string
    disabled: boolean
    className?: string
    onReveal?: () => void
}

interface RevealableTextState {
    revealed: boolean
}

class RevealableText extends Component<RevealableTextProps, RevealableTextState> {
    constructor(props: Readonly<RevealableTextProps> | RevealableTextProps) {
        super(props)
        this.state = {
            revealed: false
        }
    }

    render() {
        const { value, disabled, className } = this.props
        const { revealed } = this.state

        const defaultClass = disabled ? styles.plain : revealed ? styles.unblur : styles.blur

        return (
            <div className={styles.wrapper}>
                {!revealed && !disabled && (
                    <p className={styles.reveal} onClick={this.handleClick}>
                        Click to Reveal
                    </p>
                )}

                <p className={[defaultClass, className].join(" ")}>{value}</p>
            </div>
        )
    }

    private handleClick = () => {
        this.setState({ revealed: true })
        this.props.onReveal?.()
    }
}

export default RevealableText
