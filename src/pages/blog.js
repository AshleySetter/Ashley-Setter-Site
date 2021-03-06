import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Link from "../components/link";
import dayjs from "dayjs";
import sortBy from "lodash.sortby";
import Img from "gatsby-image";
import {Box, Card, CardHeader, CardBody, CardFooter, Text} from "grommet";

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
      <Box direction="row" wrap>
        {
        blogPosts.map(({title, date, slug, featuredImage}) => (
          <Link to={`/blog/${slug}`} key={title}>
            <Card
              height="medium" width="medium" background="light-1"
              margin="small"
            >
              <CardHeader pad="small" background="light-3">
                <Text size="large">{title}</Text>
              </CardHeader>
              <CardBody pad="small" background="light-2">
                {featuredImage?.childImageSharp?.fluid && <Img fluid={featuredImage?.childImageSharp?.fluid} />}
              </CardBody>
              <CardFooter pad={{horizontal: "small"}} background="light-3" justify="end">
                <Text> {dayjs(date).format("DD/MM/YYYY")}</Text>
              </CardFooter>
            </Card>
          </Link>
        ))
      }
      </Box>
    </Layout>
  );
};

export default BlogPage;
