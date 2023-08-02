import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import type { NextPage } from "next";
import path from "path";
import { MainWrap, Main } from "../styles/components/layout";
import { postFilePaths, SNIPPETS_PATH } from "../utils/mdx-snippets";
import Header from "@/components/Header";
import Snippets from "@/components/Snippets";
import Footer from "@/components/Footer";
import { SnippetType } from "@/lib/types";

const Home: NextPage<SnippetType> = ({ snippets }: SnippetType) => {
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
      <MainWrap>
        <Header />
        <Main>
          <Snippets itemsPerPage={15} snippets={snippets} />
        </Main>
        <Footer />
      </MainWrap>
    </>
  );
};

export async function getStaticProps() {
  const snippets = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(SNIPPETS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { snippets }, revalidate: 10 };
}

export default Home;
