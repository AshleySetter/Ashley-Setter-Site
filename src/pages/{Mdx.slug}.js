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
      <ul>
        <MDXRenderer>{body}</MDXRenderer>
      </ul>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    mdx: {
      body: PropTypes.string,
      frontmatter: {
        title: PropTypes.string,
        date: PropTypes.string,
      },
    },
  }).isRequired,
};

export const query = graphql`
  query blog_post_by_slug($slug: String) {
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
