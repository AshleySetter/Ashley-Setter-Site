import React from "react";
import PropTypes from "prop-types";
import Link from "./link";
import {Header, Text} from "grommet";
import {Location} from "@reach/router";

/**
 * A header link component to display header text which are links
 *
 * @param {object} props - react props
 * @param {string} props.text - header text
 * @param {string} props.url - link url
 * @param {object} props.location - location info within site
 * @returns {React.Component} - react component
 */
function HeaderLink({text, url, location}) {
  const {pathname} = location;
  const rootPathName = `/${pathname.split("/")[1]}`;
  return (
    <Link to={url}>
      <Header pad="1rem">
        <Text color={rootPathName === url ? "brand" : "text"}>{text}</Text>
      </Header>
    </Link>
  );
}

HeaderLink.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const HeaderLinkWithLocation = (props) => (
  <Location>
    {(locationProps) => <HeaderLink {...locationProps} {...props} />}
  </Location>
);

export default HeaderLinkWithLocation;
