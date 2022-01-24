import { Link } from "gatsby";
import React from "react";

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.slug}>
    {post.frontmatter.title} ({post.frontmatter.date})
  </Link>
);
export default PostLink;
