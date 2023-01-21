import styles from "../../../styles/sass/components/layout/card/DashboardCardLink.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { SafeAnchorProps } from "react-bootstrap"

export interface DashboardCardLinkProps {
    text: string
    href?: string
    title?: string
    chevron?: boolean
    disabled?: boolean
    className?: string
    onClick?: () => void
    onMouseDown?: () => void
    icon?: IconDefinition
}

const DashboardCardLink = (props: DashboardCardLinkProps) => {
    const { text, href, icon, title, disabled, chevron, className, onClick, onMouseDown } = props

    const classes = [disabled ? styles.disabled : styles.link, className]

    const handleClick = () => {
        if (!disabled) {
            onClick?.()
        }
    }

    const anchorProps: SafeAnchorProps = {
        className: classes.join(" "),
        href: href,
        onClick: handleClick,
        onMouseDown: onMouseDown,
        title: title,
        "aria-disabled": disabled
    }

    return (
        <a {...anchorProps}>
            {icon && (
                <FontAwesomeIcon
                    fixedWidth
                    icon={icon}
                    className={styles.linkIcon}
                    data-testid="dashboard-card-link-icon"
                />
            )}

            <span className={styles.linkText}>{text}</span>

            {chevron && (
                <FontAwesomeIcon
                    fixedWidth
                    icon={faChevronRight}
                    className={styles.chevron}
                    data-testid="dashboard-card-link-chevron"
                />
            )}
        </a>
    )
}

export default DashboardCardLink
