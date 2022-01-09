import { PropsWithChildren } from "react";
import ComponentTree from "../../utility/ComponentTree";

export interface UnderlineProps {
    underline: string;
    underlineClass?: string;
}

const Underline = (props: PropsWithChildren<UnderlineProps>) => {

    const { underline, underlineClass, children } = props;

    const value: string = new ComponentTree(children).getDeepestLeafNode();

    const underlineStartIndex = value.indexOf(underline);
    const start = value.substring(0, underlineStartIndex);

    const underlineEndIndex = underlineStartIndex + underline.length;
    const underlined = value.substring(underlineStartIndex, underlineEndIndex);
    const remaining = value.substring(underlineEndIndex);

    return (
        <span>
            {start}
            <span className={underlineClass}>{underlined}</span>
            {remaining}
        </span>
    );
}

export default Underline;
