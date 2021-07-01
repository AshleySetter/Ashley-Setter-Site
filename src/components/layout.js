import React from "react";
import PropTypes from "prop-types";
import {useStaticQuery, graphql} from "gatsby";

import HeaderLink from "./header-link";
import {Mail} from "grommet-icons";
import {Grommet, Box as GrommetBox, Button, Header, Text} from "grommet";
import {grommet} from "grommet/themes";

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
    <Grommet
      theme={grommet}
      full
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <GrommetBox direction="column">
        <Header pad="1rem">
          <Text size="xxlarge">{data.site.siteMetadata.title}</Text>
        </Header>
        <Header pad="1rem">
          <Text size="large">{pageTitle}</Text>
        </Header>
        <GrommetBox direction="row" align="center" justify="between">
          <GrommetBox direction="row">
            {links.map(({text, url}) => (
              <HeaderLink key={text} text={text} url={url} />
          ))}
          </GrommetBox>
          <GrommetBox direction="row">
            <Button margin="1rem">
              <Mail />
            </Button>
          </GrommetBox>
        </GrommetBox>
        <GrommetBox pad="1rem">
          {children}
        </GrommetBox>
      </GrommetBox>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Layout;
