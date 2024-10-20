import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import "./blogTemplate.scss";
require("prismjs/themes/prism-okaidia.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => (
  <>
    <title>{data.markdownRemark.frontmatter.title} | Barrett Coats</title>
    <meta
      name="description"
      content={
        data.markdownRemark.frontmatter.description ||
        data.markdownRemark.excerpt
      }
    />
    <meta
      name="keywords"
      content={`${data.markdownRemark.frontmatter.tags?.join(
        ", "
      )}, J. Barrett Coats, technical notes, blog`}
    />
  </>
);

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        tags
      }
    }
  }
`;

export default BlogPostTemplate;
