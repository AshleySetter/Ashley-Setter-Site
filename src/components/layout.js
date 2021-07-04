import React from "react";
import PropTypes from "prop-types";

import Link from "./link";
import HeaderLink from "./header-link";
import {Mail, Github, Facebook, Linkedin, Instagram, Twitter, Menu as MenuIcon} from "grommet-icons";
import {Grommet, Box, Header, Nav, Text, ResponsiveContext, Menu} from "grommet";
import theme from "../theme";
import {navigate} from "gatsby";

const Layout = ({pageTitle, children}) => {
  const links = [
    {text: "Home", url: "/"},
    {text: "Blog", url: "/blog"},
    {text: "About", url: "/about"},
  ];

  const navLinks = [
    {icon: <Mail />, url: "mailto:assetter@hotmail.com"},
    {icon: <Github />, url: "https://github.com/ashleysetter"},
    {icon: <Facebook />, url: "https://www.facebook.com/ash.setter"},
    {icon: <Linkedin />, url: "https://uk.linkedin.com/in/ashleysetter"},
    {icon: <Instagram />, url: "https://www.instagram.com/setterash/"},
    {icon: <Twitter />, url: "https://twitter.com/AshleySetter"},
  ];
  return (
    <Grommet
      theme={theme}
      full
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box direction="column">
            <Header
              background="brand" pad="medium" justify="between"
            >
              {size === "small" ?
                <Menu
                  label={<MenuIcon />}
                  icon={false}
                  items={links.map(({text, url}) => (
                    {label: text, onClick: () => navigate(url)}
                  ))}
                  dropBackground="brand"
                /> :
                <Box direction="row">
                  {links.map(({text, url}) => (
                    <HeaderLink key={text} text={text} url={url} />
                ))}
                </Box>
              }
              <Nav direction="row">
                {navLinks.map(({icon, url}) =>
              (<Link key={url} to={url}>
                {icon}
              </Link>),
            )}
              </Nav>
            </Header>
            <Header pad="small" justify="center">
              <Text size="xlarge" weight="bold">{pageTitle}</Text>
            </Header>
            <Box pad="small">
              {children}
            </Box>
          </Box>)}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Layout;
