import React from "react";
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="main page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <div>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera."
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </div>
      <div> Some more content after the image </div>
    </Layout>
  );
};

export default IndexPage;
