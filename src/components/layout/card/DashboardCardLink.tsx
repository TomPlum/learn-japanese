import styles from "../../../styles/sass/components/layout/card/DashboardCardLink.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export interface DashboardCardLinkProps {
    text: string;
    href?: string;
    chevron?: boolean;
    className?: string;
    onClick?: () => void;
    icon?: IconDefinition;
}

const DashboardCardLink = (props: DashboardCardLinkProps) => {

    const { text, href, icon, chevron, className, onClick } = props;

    return (
        <a className={[styles.link, className].join(" ")} href={href} onClick={onClick}>
            {icon && (
                <FontAwesomeIcon
                    fixedWidth
                    icon={icon}
                    className={styles.linkIcon}
                    data-testid="dashboard-card-link-icon"
                />
            )}

            <span className={styles.linkText}>
                {text}
            </span>

            {chevron && (
                <FontAwesomeIcon
                    fixedWidth
                    icon={faChevronRight}
                    className={styles.chevron}
                    data-testid="dashboard-card-link-chevron"
                />)
            }
        </a>
    );
}

export default DashboardCardLink;
