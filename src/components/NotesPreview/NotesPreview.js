import { Link, graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import "./NotesPreview.scss";

const NotesPreview = () => {
  const notesData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 3) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
            }
          }
        }
      }
    }
  `);

  return (
    <div class="notes-preview">
      <h2>Recent Notes</h2>
      <hr />
      {notesData.allMarkdownRemark.edges
        .filter((edge) => edge.node.frontmatter.title !== "Sandbox")
        .map((edge) => (
          <div class="notes-preview__single-note-preview">
            <h3 key={edge.node.id}>{edge.node.frontmatter.title}</h3>
            <p>{edge.node.excerpt}</p>
            <Link to={edge.node.frontmatter.slug}>Continue reading...</Link>
          </div>
        ))}
      <Link to="/notes">View more notes...</Link>
    </div>
  );
};

export default NotesPreview;
