import styles from "../../../styles/sass/components/ui/loading/LoadingDots.module.scss"

export type DotsAnimation =
    | "elastic"
    | "pulse"
    | "flashing"
    | "collision"
    | "revolution"
    | "carousel"
    | "typing"
    | "windmill"
    | "bricks"
    | "floating"
    | "fire"
    | "spin"
    | "falling"
    | "stretching"

export interface LoadingDotsProps {
    className?: string
    colour?: string
    type: DotsAnimation
    duration?: number
}

const LoadingDots = (props: LoadingDotsProps) => {
    const { type, colour, duration, className } = props

    return (
        <span
            data-testid="loading-dots"
            className={[className, styles[`dot-${type}`]].join(" ")}
            style={{ color: colour, backgroundColor: colour, animationDuration: `${duration}s` }}
        />
    )
}

export default LoadingDots
