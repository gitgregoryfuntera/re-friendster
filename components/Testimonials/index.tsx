import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import Testimonial from "../Testimonial";
import classes from "./styles.module.scss";

export interface TestimonialProps {
  testimonialsDoc: QueryDocumentSnapshot<DocumentData>[];
}
export interface TestimonialsArr {
  createdAt?: CreatedAt;
  text: string;
  testimonialUserIdRef: JSON;
  currentUserRefId: JSON;
}
export interface CreatedAt {
  seconds?: number;
  nanoseconds?: number;
}

const Testimonials = ({ testimonialsDoc }: TestimonialProps): JSX.Element => {
console.log("🚀 ~ file: index.tsx ~ line 21 ~ testimonials", testimonialsDoc);
  return (
    <div className={classes.testimonialsContainer}>
      <div className={classes.title}>
        <h1>Testimonial</h1>
      </div>
      {
        testimonialsDoc && testimonialsDoc.map(doc => <span key={doc.id}>{ doc.data().text}
        </span>)
      }
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
