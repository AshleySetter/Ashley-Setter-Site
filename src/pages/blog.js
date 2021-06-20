import * as React from "react";
import {useStaticQuery, graphql, Link} from "gatsby";
import dayjs from "dayjs";
import sortBy from "lodash.sortby";
import Img from "gatsby-image";

import {
  blogListItem,
} from "./blog.module.css";

import Layout from "../components/layout";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
            id
            excerpt(pruneLength: 250)
            slug
            frontmatter {
                date
                title
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 630) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
        }
      }
    }
  `);

  let blogPosts = data.allMdx.nodes.map(({frontmatter, slug}) => ({...frontmatter, slug}));
  blogPosts = sortBy(blogPosts, ({date}) => -dayjs(date).valueOf());
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
        blogPosts.map(({title, date, slug, featuredImage}) => (
          <React.Fragment>
            <Link to={`/${slug}`} key={title}>
              <li className={blogListItem}>
                {title} - {date}
              </li>
            </Link>
            <Img fluid={featuredImage?.childImageSharp?.fluid} />
          </React.Fragment>
        ))
      }
      </ul>
    </Layout>
  );
};

export default BlogPage;
