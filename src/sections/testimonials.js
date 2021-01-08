import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Glider from 'glider-js';
import Testimonial from 'components/testimonial';

const Testimonials = ({ content }) => {

    const initSlider = () => {
        new Glider(document.querySelector('.glider'),{
            slidesToShow: 1,
            dots: '.glider__dots',
            draggable: true,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        });
    }
   
    useEffect(() => {
        initSlider();
    });

   return (
    <section id="testimonials" className="testimonials container section mx-auto">
        <div className="w-full md:w-1/2 pl-0 md:pl-16 text-center md:text-left">
            <h2 className="w-full md:w-3/4 font-bold text-5xl leading-none mb-6" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.heading }</h2>
            <p className="w-full md:w-3/4" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.description.description }</p>
        </div>
        <div className="w-full md:w-1/2 pt-12 md:pt-0">
            {
                content.testimonials.length > 0 &&
                <div className="testimonial__slider" data-sal="fade" data-sal-easing="ease-in-cubic">
                    <div className="glider">
                        {
                            content.testimonials.map(testimonial => (
                                <Testimonial testimonial={ testimonial } key={ testimonial.id }/>
                            ))
                        }
                    </div>
                    <button className="glider-prev material-icons">keyboard_arrow_left</button>
                    <button className="glider-next material-icons">keyboard_arrow_right</button> 
                    <div className="glider__dots"></div>
                </div>
            }
            
        </div>
    </section>
   );
};

Testimonials.propTypes = {
    content : PropTypes.object.isRequired
}

export default Testimonials;