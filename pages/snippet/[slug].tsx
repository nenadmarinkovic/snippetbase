import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Header from "../../components/Header";
import { useState } from "react";
import { NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { postFilePaths, SNIPPETS_PATH } from "../../utils/mdx-snippets";
import { Container } from "../../styles/components/layout";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

const components = {
  Head,
};

const PostPage: NextPage = ({ source, frontMatter }: any) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title> {frontMatter.title} </title>
        <meta name="description" content="Web development and design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />
        <main>
          {frontMatter.title}
          <MDXRemote {...source} components={components} />
        </main>
      </Container>
    </>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const snippetFilePath = path.join(SNIPPETS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(snippetFilePath);
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight, remarkGfm],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
