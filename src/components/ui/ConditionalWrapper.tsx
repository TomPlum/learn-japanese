export interface ConditionalWrapperProps {
    condition: boolean;
    wrapper: (child: JSX.Element) => JSX.Element;
    children: JSX.Element;
}

const ConditionalWrapper = (props: ConditionalWrapperProps) => {
    const { condition, wrapper, children } = props;
    return condition ? wrapper(children) : children;
}

export default ConditionalWrapper;
