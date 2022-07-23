import React, { useEffect, useState } from "react";
import ProfileDetails from "../../components/ProfileDetails";
import ProfileHeroBanner from "../../components/ProfileHeroBanner";
import ProfilePicture from "../../components/ProfilePicture";
import ProfileShoutOut from "../../components/ProfileShoutOut";
import Testimonials from "../../components/Testimonials";
import UserConnections from "../../components/UserConnections";
import classes from "./styles.module.scss";
// import { collection, getDocs } from "firebase/firestore";
import { app, db } from "../../utils/db";
import { getReferenceDoc } from "../../utils/db/helpers";
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

// TODO: Add Firestore Hooks, keep in mind middleware fetch (getStaticProps)
const ProfilePage = () => {
  // const [testimonials, setTestimonials]= useState([]);
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), 'testimonials'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  // useEffect(() => {
  //   getTestimonials();
  // }, []);

  // const getTestimonials = async () => {
  //   const querySnapshot = await getDocs(collection(db, "testimonials"));
  //   let testimonialArr: any = [];
  //   querySnapshot.forEach(async (doc) => {
  //     const testimonialUserRef = await getReferenceDoc(
  //       doc.data().testimonialUserIdRef
  //     );
  //     const testimonialData =  {
  //       testimonialUserRef: testimonialUserRef,
  //       ...doc.data(),
  //       id: doc.id,
  //     };
  //     testimonialArr.push(testimonialData);
  //   });
  //   setTestimonials(testimonialArr);
  // };

  return (
    <div className="pageLayout">
      <div className={classes.profileHeaderContainer}>
        <ProfileHeroBanner />
        <ProfilePicture />
        <ProfileShoutOut />
        <ProfileDetails />
      </div>
      <div className={classes.mainContentContainer}>
        {value && (
          <div className={classes.testimonialsContainer}>
          <Testimonials testimonialsDoc={value.docs}/>
        </div>
        )}
        <div className={classes.userConnectionsContainer}>
          <UserConnections />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
