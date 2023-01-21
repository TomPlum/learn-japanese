import React, { Component } from "react"
import styles from "../../../styles/sass/components/ui/display/ScoreDisplay.module.scss"

export interface ScoreDisplayProps {
    value: number
    streak: number
    className?: string
}

interface ScoreDisplayState {
    showingStreak: boolean
}

class ScoreDisplay extends Component<ScoreDisplayProps, ScoreDisplayState> {
    constructor(props: Readonly<ScoreDisplayProps> | ScoreDisplayProps) {
        super(props)

        this.state = {
            showingStreak: false
        }
    }

    componentDidMount() {
        this.setState({ showingStreak: this.hasStreakMilestone() })
    }

    componentDidUpdate(prevProps: Readonly<ScoreDisplayProps>) {
        if (prevProps.streak !== this.props.streak) {
            this.setState({ showingStreak: this.hasStreakMilestone() })
        }
    }

    render() {
        const { value, className, streak } = this.props
        const { showingStreak } = this.state

        return (
            <div className={[styles.wrapper, className].join(" ")}>
                <span className={styles.value} title="Score">
                    {value}
                </span>
                {this.hasStreakMilestone() && showingStreak && (
                    <span className={styles.streak} onAnimationEnd={this.onStreakAnimationEnd}>
                        {streak + " streak!"}
                    </span>
                )}
            </div>
        )
    }

    private onStreakAnimationEnd = () => this.setState({ showingStreak: false })

    private hasStreakMilestone = (): boolean => {
        const { streak } = this.props
        return streak !== 0 && streak % 5 === 0
    }
}

export default ScoreDisplay
