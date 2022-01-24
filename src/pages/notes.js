import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import PostLink from "../components/PostLink/PostLink";
import "./notes.scss";

const Notes = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => edge.node.frontmatter.title !== "Sandbox")
    .map((edge) => (
      <li key={edge.node.id}>
        <PostLink post={edge.node} />
      </li>
    ));

  return (
    <Layout>
      <title>Notes | J. Barrett Coats</title>
      <h1>Notes</h1>
      <ul>{Posts}</ul>
    </Layout>
  );
};

export default Notes;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
`;
