import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import Img from 'gatsby-image';

const PageNotFound = ({ content }) => {

    return (
        <section className="page-not-found container section mx-auto text-center py-24">
            <div className="flex flex-col mx-auto">
                <h2 className="font-bold text-5xl mb-12">{ content?.heading }</h2>
                <div className="page-not-found__image-wrap mb-12">
                    <Img fluid={ content?.image.fluid } alt="not found" className="page-not-found__image" />
                </div>
                <p className="mb-12">{ content?.description.description }</p>
                <Link to={ content?.buttonUrl } className="btn btn--secondary mx-auto md:w-1/2">{ content?.buttonText }</Link>
            </div>  
        </section>
    );
};

PageNotFound.propTypes = {
    content : PropTypes.object.isRequired
}

export default PageNotFound;