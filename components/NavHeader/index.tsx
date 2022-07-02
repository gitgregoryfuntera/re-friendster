import React from "react";
import classes from "./styles.module.scss";
import { useMediaQuery } from "react-responsive";
import MobileNavHeader from "./MobileNavHeader";
import DesktopNavHeader from "./DesktopNavHeader";

const NavHeader = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  if (isTabletOrMobile) {
    return (
      <nav className={classes.navigationContainer}>
        <MobileNavHeader />
      </nav>
    );
  }
  return (
    <nav className={classes.navigationContainer}>
      <DesktopNavHeader />
    </nav>
  );
};

export default NavHeader;
