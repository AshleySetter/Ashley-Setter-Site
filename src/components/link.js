import React from "react";
import PropTypes from "prop-types";
import {Anchor} from "grommet";
import {navigate} from "gatsby";

const Link = ({to, children, ...rest}) => {
  const internal = /^\/(?!\/)/.test(to);
  let content = (
    <a href={to} {...rest}>
      {children}
    </a>
  );
  if (internal) {
    content = (
      <Anchor
        href={to}
        onClick={(ev) => {
          navigate(to);
          ev.preventDefault();
        }}
      >
        {children}
      </Anchor>
    );
  }
  return content;
};

Link.propTypes = {
  to: PropTypes.string,
};
export default Link;
