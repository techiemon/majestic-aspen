import React from 'react';
import PropTypes from 'prop-types';

import PricingPlan from 'components/pricingPlan';

const Pricing = ({ content }) => {

    return (
        <section id="pricing" className="pricing section bg-gray">
            <div className="container mx-auto">
                <h2 className="section__title text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.heading }</h2>
                {
                    content.pricingPlans.length > 0 && 
                    <div className="pricing__items">
                        {
                            content.pricingPlans.map(plan => (
                                <PricingPlan plan={ plan } key={ plan.id } />
                            ))
                        }
                    </div>
                }
                
            </div>
        </section>
    );
};

Pricing.propTypes = {
    content: PropTypes.object.isRequired,
}

export default Pricing;