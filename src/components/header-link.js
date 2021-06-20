import React from "react";
import PropTypes from "prop-types";
import {Heading, LinkBox, LinkOverlay} from "@chakra-ui/react";

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
    <LinkBox>
      <Heading p="1rem" size="md">
        <LinkOverlay href={url}>
          {text}
        </LinkOverlay>
      </Heading>
    </LinkBox>
  );
}

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default HeaderLink;
