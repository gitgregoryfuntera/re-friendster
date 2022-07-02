import React from "react";
import classes from "./styles.module.scss";

const ProfileShoutOut = () => {
  return (
    <div className={classes.shoutOutContainer}>
      <div className={classes.shoutOut}>
        <span>Hello World!</span>
      </div>
    </div>
  );
};

export default ProfileShoutOut;
