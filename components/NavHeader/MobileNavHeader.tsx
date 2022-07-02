import React, { useState } from "react";
import classes from "./styles.module.scss";
import { FaUserFriends, FaBars } from "react-icons/fa";
import NavHeaderModal from "./NavHeaderModal";
import CustomButton from "../CustomButton";
const MobileNavHeader = () => {
  const [isNavHeaderModalOpen, setIsNavHeaderModalOpen] = useState(false);

  const toggleMenu = () => {
    if (!isNavHeaderModalOpen) {
      setIsNavHeaderModalOpen(true);
      console.log(
        "🚀 ~ file: MobileNavHeader.tsx ~ line 10 ~ toggleMenu ~ isMenuExpanded",
        isNavHeaderModalOpen
      );
    } else {
      setIsNavHeaderModalOpen(false);
      console.log(
        "🚀 ~ file: MobileNavHeader.tsx ~ line 13 ~ toggleMenu ~ isMenuExpanded",
        isNavHeaderModalOpen
      );
    }
  };
  return (
    <>
      <div className={classes.logoContainer}>
        <div className={classes.navLogoContainerMobile}>
          <FaUserFriends size={30} id={classes.logo} />
        </div>
      </div>
      <div className={classes.navActionContainerMobile}>
        <CustomButton onClick={toggleMenu}>
          <FaBars size={30} />
        </CustomButton>
      </div>
      <NavHeaderModal show={isNavHeaderModalOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default MobileNavHeader;
