import React from 'react';
import PropTypes from "prop-types";
import Hero from 'sections/hero';
import About from 'sections/about';
import Testimonials from 'sections/testimonials';
import Services from 'sections/services';
import Pricing from 'sections/pricing';
import Contact from 'sections/contact';
import PageNotFound from 'sections/pageNotFound';

// Dynamically import or require sections inside the section folder
const components = {
    Hero,
    About,
    Testimonials,
    Services,
    Pricing,
    Contact,
    PageNotFound
};

const Section = ({ contentModuleId, type, content }) => {
    const component = type.split('Layout')[1];
    
    if (typeof components[component] === 'undefined') {
        return '';
    }

    return React.createElement(components[component],{
        contentModuleId,
        content
    });
}

Section.prototype = {
    contentModuleId: PropTypes.string.isRequired,
    content: PropTypes.any,
    type: PropTypes.string.isRequired
}

export default Section;
