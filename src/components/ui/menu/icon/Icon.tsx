import { Icon as IconType } from "../../../../domain/Icon"
import React from "react";
import * as CustomFontAwesomeIcon from "react-icons/fa";
import styles from "../../../../styles/sass/components/ui/menu/icon/Icon.module.scss";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IconProps {
    size?: string;
    value: IconDefinition | IconType | string;
    className?: string;
    onClick?: (icon: IconDefinition | IconType | string) => void;
}

const Icon = (props: IconProps) => {
    const { size, value, className, onClick, ...rest } = props;

    const isReactIconsType = (value: IconDefinition | IconType | string): value is IconType => {
        return value.toString().startsWith("Fa");
    }

    const isFontAwesomeIconDefinition = (value: IconDefinition | IconType | string): value is IconDefinition => {
        return !isReactIconsType(value) && (typeof value !== 'string');
    }

    const iconProps = {
        ...rest,
        key: value.toString(),
        style: { 'fontSize': size },
        onClick: () => onClick?.(value),
        title: value.toString().replace("Fa", ""),
        className: [className, styles.icon].join(" ")
    };

    if (isFontAwesomeIconDefinition(value)) {
        return <FontAwesomeIcon icon={value} />
    }

    if (!isReactIconsType(value)) {
        return <span {...iconProps}>{value}</span>
    }

    if (!!value && isReactIconsType(value)) {
        return React.createElement(CustomFontAwesomeIcon[value], iconProps);
    }

    return null;
}

export default Icon;
