import React from "react";
import classes from "./styles.module.scss";

type CustomButtonProps = {
  children: React.ReactNode;
  href?: string | null;
  buttonType?: string;
  className?: string;
  onClick?: () => void;
};

const CustomButton = ({
  children,
  buttonType = "",
  href,
  className = "",
  ...rest
}: CustomButtonProps): JSX.Element => {
  if (href) {
    return (
      <div  className={`${className}`}>
        <a>{children}</a>
      </div>
    );
  }
  return (
    <div className={`${classes.customButton} ${className}`}>
      <button className={classes[buttonType]} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
