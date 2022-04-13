import { Icon as IconType } from "../../../../domain/Icon"
import React from "react";
import * as CustomFontAwesomeIcon from "react-icons/fa";
import styles from "../../../../styles/sass/components/ui/menu/icon/Icon.module.scss";

export interface IconProps {
    value: IconType;
    className?: string;
    onClick?: (icon: IconType) => void;
}

const Icon = (props: IconProps) => {
    const { value, className, onClick, ...rest } = props;

    if (!!value) {
        return React.createElement(CustomFontAwesomeIcon[value], {
            ...rest,
            key: value,
            title: value.replace("Fa", ""),
            onClick: () => onClick?.(value),
            className: [className, styles.icon].join(" ")
        });
    }

    return null;
}

export default Icon;
