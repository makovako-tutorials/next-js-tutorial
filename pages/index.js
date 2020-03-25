import Head from "next/head";
import Link from "next/link";
import fs from "fs";

const Home = ({ slugs }) => (
  <div>
    {slugs.map(slug => {
      return (
        <div key={slug}>
          <Link href="/blog/[slug]" as={"/blog/" + slug}>
            {"/blog/" + slug}
          </Link>
        </div>
      );
    })}
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default Home;
