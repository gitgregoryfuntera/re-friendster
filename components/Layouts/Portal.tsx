import React from "react";
import ReactDOM from "react-dom";

type PortalProps = {
  children: JSX.Element;
};

const Portal = ({ children }: PortalProps) => {
  return ReactDOM.createPortal(
    <>{children}</>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Portal;
