import React from "react";
import PropTypes from "prop-types";
import {Link} from "gatsby";
import {Header, Text} from "grommet";

/**
 * A header link component to display header text which are links
 *
 * @param {object} props - react props
 * @param {string} props.text - header text
 * @param {string} props.url - link url
 * @returns {React.Component} - react component
 */
function HeaderLink({text, url}) {
  return (
    <Link to={url}>
      <Header pad="1rem">
        <Text>{text}</Text>
      </Header>
    </Link>
  );
}

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default HeaderLink;
