import React from 'react';
import Testimonial from '../Testimonial';
import classes from './styles.module.scss';

const Testimonials = () => {
    return <div className={classes.testimonialsContainer}>
        <div className={classes.title}>
            <h1>Testimonial</h1>
        </div>
        <div>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
        </div>
        <div>
            
        </div>
    </div>
}

export default Testimonials;