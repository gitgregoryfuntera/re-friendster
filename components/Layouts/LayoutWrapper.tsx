import NavHeader from "../NavHeader";

type LayoutWrapperProps = {
  children: JSX.Element;
};

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <>
      <NavHeader />
      <main>{children}</main>
    </>
  );
};

export default LayoutWrapper;
