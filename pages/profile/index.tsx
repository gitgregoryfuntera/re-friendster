import React, { useEffect, useState } from "react";
import ProfileDetails from "../../components/ProfileDetails";
import ProfileHeroBanner from "../../components/ProfileHeroBanner";
import ProfilePicture from "../../components/ProfilePicture";
import ProfileShoutOut from "../../components/ProfileShoutOut";
import Testimonials from "../../components/Testimonials";
import UserConnections from "../../components/UserConnections";
import classes from "./styles.module.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/db";
import { getReferenceDoc } from "../../utils/db/helpers";

// TODO: Add Firestore Hooks, keep in mind middleware fetch (getStaticProps)
const ProfilePage = () => {
  const [testimonials, setTestimonials]= useState([]);

  useEffect(() => {
    getTestimonials();
  }, []);

  const getTestimonials = async () => {
    const querySnapshot = await getDocs(collection(db, "testimonials"));
    let testimonialArr: any = [];
    querySnapshot.forEach(async (doc) => {
      const testimonialUserRef = await getReferenceDoc(
        doc.data().testimonialUserIdRef
      );
      const testimonialData =  {
        testimonialUserRef: testimonialUserRef,
        ...doc.data(),
        id: doc.id,
      };

      testimonialArr.push(testimonialData);
    });
  };
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
          {console.log(testimonials)}
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
