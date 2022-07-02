import React from "react";
import classes from "./styles.module.scss";

const ProfilePicture = () => {
  return (
    <div className={classes.profilePictureContainer}>
      <div className={classes.imageContainer}>
        <img src="http://www.placecage.com/250/250" />
      </div>
    </div>
  );
};

export default ProfilePicture;
