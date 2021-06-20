import React from "react";
import PropTypes from "prop-types";
import {useStaticQuery, graphql} from "gatsby";

import {Box, Flex, Heading} from "@chakra-ui/react";
import HeaderLink from "./header-link";
import {IconButton} from "@chakra-ui/react";
import {EmailIcon} from "@chakra-ui/icons";

const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const links = [
    {text: "Home", url: "/"},
    {text: "Blog", url: "/blog"},
    {text: "About", url: "/about"},
  ];

  return (
    <Flex flexDirection="column">
      <Heading fontSize="2rem" p="1rem">{data.site.siteMetadata.title}</Heading>
      <Heading size="lg" p="1rem">{pageTitle}</Heading>
      <Flex flexDirection={"row"} alignItems="center" justifyContent="space-between">
        <Flex flexDirection={"row"}>
          {links.map(({text, url}) => (
            <HeaderLink key={text} text={text} url={url} />
          ))}
        </Flex>
        <Flex flexDirection={"row"}>
          <IconButton m="1rem" icon={<EmailIcon />} />
        </Flex>
      </Flex>
      <Box p="1rem">
        {children}
      </Box>
    </Flex>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Layout;
