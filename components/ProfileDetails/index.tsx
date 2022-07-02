import React from "react";
import classes from "./styles.module.scss";

const ProfileDetails = () => {
  return (
    <div className={classes.profileDetailsContainer}>
      <div className={classes.detailsContainer}>
        <div className={classes.spacer}></div>
        <div className={classes.details}>
          <div className={classes.item}>
            <h4>Name</h4>
            <p>John Doe</p>
          </div>
          <div className={classes.item}>
            <h4>Sex</h4>
            <p>Male</p>
          </div>
          <div className={classes.item}>
            <h4>Birth</h4>
            <p>20 June 1994</p>
          </div>
          <div className={classes.item}>
            <h4>Location</h4>
            <p>Manila - PH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
