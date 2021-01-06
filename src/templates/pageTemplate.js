import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

import Section from 'sections/section';

export const query = graphql`
    query($slug: String!, $node_locale: String!) {
        contentfulLayout(slug: { eq: $slug }, node_locale:{ eq: $node_locale}) {
            id
            slug
            title
            description
            contentful_id
            menu {
                name
                type
                menuItems {
                    id
                    title
                    url
                }
            },
            contentModule {
                ... on Node {
                    id
                }
                ... on ContentfulLayoutHero {
                    id
                    heading
                    subheading
                    description {
                        description
                    }
                    ctaText
                    ctaUrl
                    image {
                        fluid(quality: 100) {
                            ...GatsbyContentfulFluid
                        }
                    }
                  }
            }
        }
    }
`;

export default function PageTemplate(props) {
    const { data, pageContext } = props;
    const title = data.contentfulLayout.title;
    const description = data.contentfulLayout.description;
    const menus = data.contentfulLayout.menu;
    const contentModule = data.contentfulLayout.contentModule;

console.log('template data', data);
console.log('template pageContext', pageContext)
    return (
        <Layout menus={ menus }>
            <SEO title={ title } description={ description } />
            {
                contentModule && contentModule.length > 0 &&
                contentModule.map(content => (
                    <Section contentModuleId={ content.id } content={content} type={ content.__typename } key={content.id}/>
                ))
            }
        </Layout>
    );
}
