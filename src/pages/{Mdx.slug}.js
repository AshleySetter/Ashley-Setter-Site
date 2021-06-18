import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";

import Layout from "../components/layout";

const BlogPost = ({data}) => {
  const {
    body,
    frontmatter: {title},
  } = data.mdx;
  return (
    <Layout pageTitle={title}>
      <article>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      body: PropTypes.string,
      frontmatter: PropTypes.shape( {
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query blogPostBySlug($slug: String) {
    mdx(slug: {eq: $slug}) {
      id
      slug
      body
      frontmatter {
          date
          title
      }
    }
  }
`;

export default BlogPost;
