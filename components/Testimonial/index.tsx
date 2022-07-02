import React from "react";
import classes from "./styles.module.scss";

const Testimonial = () => {
  return (
    <>
      <div className={classes.testimonialContainer}>
        <div className={classes.imageContainer}>
          <img src="http://www.placecage.com/250/250" height="80"/>
        </div>
        <div className={classes.textContainer}>
          <div className={classes.textHeader}>
            <h4>John Doe</h4>
            <span>18 December 2018</span>
          </div>
          <p className={classes.textContent}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, quo
            dolorem dolorum iste cumque aliquid dicta debitis doloribus tempore
            culpa ullam id eius hic quibusdam adipisci aut a quam soluta?
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
