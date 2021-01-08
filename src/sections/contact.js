import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import validation from 'utils/validation';

const Contact = ({ content }) => {

    useEffect(() => {
        validation.init();
    },[]);

    return (
        <section id="contact" className="contact container section mx-auto">
            <div className="contact__content">
                <h2 className="section__title" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.heading }</h2>
                <p className="mb-4 w-full md:w-3/4" data-sal="slide-up" data-sal-easing="ease-in-cubic">{ content.description.description }</p>
                <form id="contact_form" className="w-full md:w-3/4" noValidate data-sal="slide-up" data-sal-easing="ease-in-cubic" data-sal-delay="100">
                    <div className="input-group mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="input" name="name" />
                    </div>
                    <div className="input-group mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="input" name="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="h-20" name="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn--primary mt-8">Send</button>
                </form>
            </div>
            <div className="contact__image">
                <div className="mx-auto" data-sal="slide-up" data-sal-delay="400" data-sal-duration="500">
                    <div className="contact__image-wrap">
                        <Img fluid={ content.image.fluid } alt="Contact" />
                    </div>
                </div>
            </div>
        </section>   
    );
};

Contact.propTypes = {
    content: PropTypes.object.isRequired,
}

export default Contact;