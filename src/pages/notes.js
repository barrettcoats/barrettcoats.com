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
      <h1>Notes</h1>
      <ul>{Posts}</ul>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Notes | J. Barrett Coats</title>
    <meta
      name="description"
      content="Explore J. Barrett Coats' collection of technical notes, offering insights on software development, troubleshooting, and personal projects. Topics include coding solutions, hobbyist electronics, and more."
    />
    <meta
      name="keywords"
      content="Barrett Coats, J. Barrett Coats, technical notes, software development, coding blog, troubleshooting, Java, JavaScript, C#, ASP.NET, hobbyist electronics, St. Louis developer"
    />
  </>
);

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

export default Notes;
