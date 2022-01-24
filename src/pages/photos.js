import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import Gallery from "@browniebroke/gatsby-image-gallery";

const Photos = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp);

  return (
    <Layout>
      <title>Photos | J. Barrett Coats</title>
      <Gallery images={images} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile(
      filter: { sourceInstanceName: { eq: "photos" } }
      sort: { name: DESC }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default Photos;
