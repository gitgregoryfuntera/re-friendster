import React from "react";
import UserConnectionImage from "../UserConnectionImage";
import classes from "./styles.module.scss";
const UserConnections = () => {
  return (
    <div className={classes.userConnectionsContainer}>
      <div className={classes.title}>
        <h4>Your Connection</h4>
        <span>See All</span>
      </div>
      <div className={classes.connections}>
        <UserConnectionImage />
        <UserConnectionImage />
        <UserConnectionImage />
        <UserConnectionImage />
        <UserConnectionImage />
        <UserConnectionImage />
      </div>
    </div>
  );
};

export default UserConnections;
