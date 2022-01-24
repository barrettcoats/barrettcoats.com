import Gallery from "@browniebroke/gatsby-image-gallery";
import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./PhotoPreview.scss";

const PhotoPreview = () => {
  const pageQuery = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "photos" } }
        limit: 3
        sort: { name: DESC }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(
                width: 355
                height: 355
                placeholder: BLURRED
              )
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const images = pageQuery.allFile.edges.map(
    ({ node }) => node.childImageSharp
  );

  return (
    <div class="photo-preview">
      <h2>Recent Photos</h2>
      <hr />
      <div class="photos-preview__gallery">
        <Gallery
          images={images}
          rowMargin={0} // Override the -15px margin that the default
          colWidth={33.3}
          mdColWidth={33.3}
        />
      </div>
      <Link to="/photos">View more photos...</Link>
    </div>
  );
};

export default PhotoPreview;
