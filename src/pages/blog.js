import * as React from "react";
import {useStaticQuery, graphql, Link} from "gatsby";
import dayjs from "dayjs";
import sortBy from "lodash.sortby";
import Img from "gatsby-image";
import {Box} from "@chakra-ui/react";

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
      <Box>
        {
        blogPosts.map(({title, date, slug, featuredImage}) => (
          <Box
            maxW="sm" borderWidth="1rem" borderRadius="lg"
            overflow="hidden" margin="1rem" backgroundColor="gray.200"
          >
            <Link to={`/${slug}`} key={title}>
              <Box maxW="sm" borderWidth="rem" borderRadius="lg">
                <Img fluid={featuredImage?.childImageSharp?.fluid} />
              </Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {dayjs(date).format("DD/MM/YYYY")} - {title}
              </Box>
            </Link>
          </Box>
        ))
      }
      </Box>
    </Layout>
  );
};

export default BlogPage;
