import React from "react";
import ProfileDetails from "../../components/ProfileDetails";
import ProfileHeroBanner from "../../components/ProfileHeroBanner";
import ProfilePicture from "../../components/ProfilePicture";
import ProfileShoutOut from "../../components/ProfileShoutOut";
import Testimonials from "../../components/Testimonials";
import UserConnections from "../../components/UserConnections";
import classes from "./styles.module.scss";

const ProfilePage = () => {
  return (
    <div className="pageLayout">
      <div className={classes.profileHeaderContainer}>
        <ProfileHeroBanner />
        <ProfilePicture />
        <ProfileShoutOut />
        <ProfileDetails />
      </div>
      <div className={classes.mainContentContainer}>
        <div className={classes.testimonialsContainer}>
          <Testimonials />
        </div>
        <div className={classes.userConnectionsContainer}>
          <UserConnections />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
