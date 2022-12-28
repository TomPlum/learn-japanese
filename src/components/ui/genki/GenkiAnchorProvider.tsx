import {PropsWithChildren} from "react";

const GenkiAnchorProvider = (props: PropsWithChildren<any>) => {

    const { children } = props;

    return (
      <div>
          {children}
      </div>
    );
}

export default GenkiAnchorProvider;