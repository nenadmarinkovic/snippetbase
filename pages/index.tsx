import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import type { NextPage } from "next";
import path from "path";
import { Container } from "../styles/components/layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdx-posts";
import Header from "@/components/Header";
import Snippets from "@/components/Snippets";

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>Snippetbase</title>
        <meta
          name="description"
          content="Code snippets for developers and designers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <Snippets posts={posts} />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts }, revalidate: 10 };
}

export default Home;
