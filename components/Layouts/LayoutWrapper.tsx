import { useEffect, useState } from "react";
import NavHeader from "../NavHeader";

type LayoutWrapperProps = {
  children: JSX.Element;
};

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return <></>
  }

  return (
    <>
      <NavHeader />
      <main>{children}</main>
    </>
  );
};

export default LayoutWrapper;
