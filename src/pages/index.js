import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout/Layout";
import NotesPreview from "../components/NotesPreview/NotesPreview.js";
import PhotoPreview from "../components/PhotoPreview/PhotoPreview.js";
import "./index.scss";

const IndexPage = () => {
  return (
    <Layout>
      <title>J. Barrett Coats</title>

      <p>
        I'm Barrett, a fullstack developer located in the St. Louis area. For
        now, my blog section consists of notes on solutions to issues I couldn't
        find the answer for, though I hope to expand on other topics in the
        future. I also have a collection of personal photos for your perusal.
      </p>
      <p>
        If you have anything you'd like to discuss, you can reach me at{" "}
        <a href="mailto:hello@barrettcoats.com">hello@barrettcoats.com</a>
      </p>
      <p>
        If you'd like to learn more about me, check out my{" "}
        <Link to="/about">about page</Link>.
      </p>
      <p>Thanks for stopping by!</p>
      <NotesPreview />
      <PhotoPreview />
    </Layout>
  );
};

export default IndexPage;
