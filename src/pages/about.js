import React from "react";
import Layout from "../components/Layout/Layout";

const about = () => {
  return (
    <Layout>
      <title>About | J. Barrett Coats</title>
      <h1>About</h1>
      <p>
        I'm a developer in the St. Louis area, focusing on Java and Javascript
        with experience in C# and ASP.net. I'm currently working with Edward
        Jones, but have also been employed at Panera, STL Special School
        District, and Centene. I believe in constant improvement, domain-driven
        code, thorough documentation, and clean commit history. Ultimately, I
        strive to be an asset to any project I work on.
      </p>
      <p>
        When I am not kicking around on small coding projects on the side, I
        like to broaden my exposure to movies of all kinds, engage in hobbyist
        electronics projects, and digitizing audio CD booklets.
      </p>
      <p>
        Find me on <a href="https://github.com/barrettcoats">GitHub</a>,{" "}
        <a href="https://www.linkedin.com/in/barrett-coats-0557852a9/">
          LinkedIn
        </a>
        , or if you just want to reach out directly, message me at{" "}
        <a href="mailto:hello@barrettcoats.com">hello@barrettcoats.com</a>.
        Otherwise, thanks for stopping by.
      </p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About | J. Barrett Coats</title>
    <meta
      name="description"
      content="J. Barrett Coats' blog focuses on sharing technical knowledge, covering software development, troubleshooting, and projects of personal interest."
    />

    <meta
      name="keywords"
      content="Barrett Coats, J. Barrett Coats, fullstack developer, Java, JavaScript, C#, ASP.NET, software development, clean code, domain-driven design, hobbyist electronics, digitizing media, St. Louis developer"
    />
  </>
);

export default about;
