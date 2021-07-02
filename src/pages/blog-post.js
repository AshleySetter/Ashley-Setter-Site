import React from "react";
import PropTypes from "prop-types";
import {MDXRenderer} from "gatsby-plugin-mdx";

import Layout from "../components/layout";

const BlogPost = ({pageContext: {node}}) => {
  const {
    body,
    frontmatter: {title},
  } = node;
  return (
    <Layout pageTitle={title}>
      <article>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  );
};

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    node: PropTypes.shape({
      body: PropTypes.string,
      frontmatter: PropTypes.shape( {
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

export default BlogPost;
