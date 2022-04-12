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
    const { value, className, onClick } = props;

    if (!!value) {
        return React.createElement(CustomFontAwesomeIcon[value], {
            key: value,
            className: className,
            onClick: () => onClick?.(value)
        });
    }

    return <div />;
}

export default Icon;
