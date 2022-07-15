import React, { useEffect } from "react";
import Testimonial from "../Testimonial";
import classes from "./styles.module.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/db";
const Testimonials = () => {
  useEffect(() => {
    getCollections();
  }, []);
  const getCollections = async () => {
    const querySnapshot = await getDocs(collection(db, "testimonials"));
    console.log(
      "🚀 ~ file: index.tsx ~ line 12 ~ getCollections ~ querySnapshot",
      querySnapshot
    );
    querySnapshot.forEach((doc) => console.log(doc.data(), 'asd'));
  };
  return (
    <div className={classes.testimonialsContainer}>
      <div className={classes.title}>
        <h1>Testimonial</h1>
      </div>
      <div>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
      <div></div>
    </div>
  );
};

export default Testimonials;
