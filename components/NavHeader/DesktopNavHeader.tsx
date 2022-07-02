import React from "react";
import classes from "./styles.module.scss";
import { FaUserFriends } from "react-icons/fa";
import { IoPersonSharp, IoAnalytics, IoBuild } from "react-icons/io5";
import CustomButton from "../CustomButton";

const DesktopNavHeader = () => {
  return (
    <>
      <div className={classes.logoContainer}>
        <h1>React Friendster</h1>
        <span>
          <FaUserFriends size={30} id={classes.logo} />
        </span>
      </div>
      <div className={classes.navActionsContainer}>
        <CustomButton href="/activity" className={classes.navLink}>
          Activity
          <span>
            <IoAnalytics />
          </span>
        </CustomButton>
        <CustomButton href="/account" className={classes.navLink}>
          Account
          <span>
            <IoPersonSharp />
          </span>
        </CustomButton>{" "}
        <CustomButton href="/customize" className={classes.navLink}>
          Customize
          <span>
            <IoBuild />
          </span>
        </CustomButton>{" "}
      </div>
    </>
  );
};

export default DesktopNavHeader;
