import { CustomIcon, Icon as IconType } from "../../../../domain/Icon"
import React from "react";
import * as CustomFontAwesomeIcon from "react-icons/fa";
import styles from "../../../../styles/sass/components/ui/menu/icon/Icon.module.scss";
import { faQuestion, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IconProps {
    style?: {};
    size?: string;
    value: CustomIcon;
    className?: string;
    onClick?: (icon: CustomIcon) => void;
}

const Icon = (props: IconProps) => {
    const { size, value, style, className, onClick, ...rest } = props;

    const isReactIconsType = (value: CustomIcon): value is IconType => {
        return value.toString().startsWith("Fa");
    }

    const isFontAwesomeIconDefinition = (value: CustomIcon): value is IconDefinition => {
        return !isReactIconsType(value) && (typeof value !== 'string');
    }

    const iconProps = {
        ...rest,
        key: value.toString(),
        onClick: () => onClick?.(value),
        style: { 'fontSize': size, ...style },
        title: value.toString().replace("Fa", ""),
        className: [className, styles.icon].join(" ")
    };

    if (isFontAwesomeIconDefinition(value)) {
        return <FontAwesomeIcon icon={value} />
    }

    if (value != "" && !isReactIconsType(value)) {
        return <span {...iconProps}>{value}</span>
    }

    if (!!value && isReactIconsType(value)) {
        return React.createElement(CustomFontAwesomeIcon[value], iconProps);
    }

    return <FontAwesomeIcon icon={faQuestion} data-testid="unknown-icon" />
}

export default Icon;
