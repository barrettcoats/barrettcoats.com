import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import Gallery from "@browniebroke/gatsby-image-gallery";

const Photos = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp);

  return (
    <Layout>
      <Gallery images={images} />
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Photos | J. Barrett Coats</title>
    <meta
      name="description"
      content="Browse J. Barrett Coats' personal photography collection, featuring a variety of scenes and moments captured through the lens. Explore the visual side of Barrett's creative projects alongside his technical work."
    />
    <meta
      name="keywords"
      content="Barrett Coats, J. Barrett Coats, personal photos, photography collection, creative photography, photo gallery"
    />
  </>
);

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
