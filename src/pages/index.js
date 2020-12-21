import React from "react"
import {graphql, Link} from "gatsby"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`;

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #0000ff;
`;

export default ({data}) => {
    console.log(data);
    return (
        <Layout>
            <SEO title="Home"/>
            <div>
                <h1> Dette er en overskríft</h1>
                <h4>{data.allMarkdownRemark.totalCount}</h4>
                {
                    data.allMarkdownRemark.edges.map(({node}) => {
                        console.log({node})
                        return (
                            <div key={node.id}>
                                <BlogLink to={node.fields.slug}>
                                    <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
                                </BlogLink>
                                <p>{node.excerpt}</p>
                            </div>
                        );
                    })
                }
            </div>
        </Layout>
    );
}

export const query = graphql`query { allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) { totalCount edges { node { id frontmatter {description title date } excerpt fields { slug } } } } }`