import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = (props) => {
    console.log('Hero props', props)
    const { contentModuleId, content} = props;
    
    const node_locale = content.node_locale;
    console.log('node_locale', content)


    // let data = useStaticQuery(graphql`
    //     query {
    //         allContentfulLayoutHero {
    //             edges {
    //                 node {
    //                     id
    //                     heading
    //                     subheading
    //                     description {
    //                         description
    //                     }
    //                     ctaText
    //                     ctaUrl
    //                     image {
    //                         fluid(quality: 100) {
    //                             ...GatsbyContentfulFluid
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);

    // const content = data.allContentfulLayoutHero.edges.find(edge => edge.node.id === contentModuleId);
// console.log('hum data', data);
console.log('contentModuleId', contentModuleId);

    return (
        <section className="hero container section mx-auto">
            <div className="hero__tagline">
                <div className="hero__tagline-content-wrap">
                    <h2 className="hero__tagline-title" data-sal="fade">{ content.heading }</h2>
                    <p className="hero__tagline-subtitle" data-sal="fade" data-sal-delay="100">{ content.subheading }</p>
                    <p className="hero__tagline-text" data-sal="fade" data-sal-delay="200">{ content.description.description }</p>
                    <a href={ content.ctaUrl }><button className="btn btn--primary mt-8" data-sal="fade" data-sal-delay="300">{ content.ctaText }</button></a>
                </div>
            </div>
            <div className="hero__image">
                <img src={ content.image.fluid.src }  className="mx-auto" alt="Hero" data-sal="slide-right" data-sal-delay="400" data-sal-duration="500" />
            </div>
        </section>
    );
};

Hero.propTypes = {
    contentModuleId : PropTypes.string.isRequired,
    content: PropTypes.any,
}

export default Hero;