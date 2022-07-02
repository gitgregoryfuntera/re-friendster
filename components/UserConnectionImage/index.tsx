import React from "react";
import classes from "./styles.module.scss";

const UserConnectionImage = () => {
  return (
    <div className={classes.userImageContainer}>
      <div className={classes.userImageWrapper}>
        <img src="http://www.placecage.com/250/250" width="60" loading="lazy" />
      </div>
    </div>
  );
};

export default UserConnectionImage;
