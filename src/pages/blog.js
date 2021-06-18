import * as React from "react";
import {useStaticQuery, graphql, Link} from "gatsby";
import dayjs from "dayjs";
import sortBy from "lodash.sortby";

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
        blogPosts.map(({title, date, slug}) => (
          <Link to={`/${slug}`} key={title}>
            <li className={blogListItem}>
              {title} - {date}
            </li>
          </Link>
        ))
      }
      </ul>
    </Layout>
  );
};

export default BlogPage;
