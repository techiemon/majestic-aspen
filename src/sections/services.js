import React from 'react';
import PropTypes from 'prop-types';

import Service from 'components/service';

const Services = ({ content }) => {

    return (
        <section id="services" className="services container section mx-auto">
            <div>
                <h2 className="section__title text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.heading }</h2>
                {
                    content.serviceItems.length > 0 &&
                    <div className="services__items">
                        {
                            content.serviceItems.map(service => (
                                <Service service={service} key={service.id} />
                            ))
                        }
                    </div>
                }
                
            </div>
        </section>
    );
};

Services.propTypes = {
    content: PropTypes.object.isRequired,
}

export default Services;