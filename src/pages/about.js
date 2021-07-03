import React from "react";
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";
import {Box, Card} from "grommet";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there, my name is Ashley,
        I'm a software developer and previously a physicist and this is my website.
        My partner Heather and I own 2 lovely cats which may be seen below.
      </p>
      <Box direction="row" wrap>
        <Card height="medium" width="medium">
          <StaticImage
            alt="Jinx a black cat, lying on a window ledge in the sun and looking up at the camera."
            src="../images/Jinx.jpg"
          />
        </Card>
        <Card height="medium" width="medium">
          <StaticImage
            alt="Tux a black and white cat, sitting on a window ledge, looking up at the camera."
            src="../images/Tux.jpg"
          />
        </Card>
      </Box>
    </Layout>
  );
};
export default AboutPage;
