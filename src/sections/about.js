import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import AboutItem from 'components/aboutItem';

const About = ({ content }) => {

    return (
        <section id="about" className="about-us bg-gray">
            <div className="container section mx-auto">
                <div className="about-us__content">
                    <h2 className="section__title" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.heading }</h2>
                    <p data-sal="slide-up" data-sal-easing="ease-in-cubic" data-sal-delay="100">{ content.description.description }</p>
                    { 
                        content.featureItem.length > 0 &&
                        <ul className="mt-10 md:ml-8">
                            {
                                content.featureItem.map(feature => (
                                    <AboutItem feature={ feature } key={ feature.id } />
                                ))
                            }
                        </ul>
                    }
                </div>
                <div className="about-us__image">
                    <div className="mx-auto about-us__image-wrap" data-sal="slide-up" data-sal-delay="200" data-sal-duration="500">
                        <Img fluid={ content.image.fluid } />
                    </div>
                </div>
            </div>
        </section>
   );
};

About.propTypes = {
    content: PropTypes.object.isRequired,
}

export default About;