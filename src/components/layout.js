import React from "react";
import PropTypes from "prop-types";
import {Link} from "gatsby";
import {useStaticQuery, graphql} from "gatsby";
import {
  siteTitle,
  navBar,
  link,
  pageTitleStyle,
} from "./layout.module.css";

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
  return (
    <main>
      <header className={siteTitle}>
        <h1>{ data.site.siteMetadata.title }</h1>
      </header>
      <header className={pageTitleStyle}>{pageTitle}</header>
      <nav>
        <ul className={navBar}>
          <li className={link}><Link to="/">Home</Link></li>
          <li className={link}><Link to="/about">About</Link></li>
        </ul>
      </nav>
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Layout;
