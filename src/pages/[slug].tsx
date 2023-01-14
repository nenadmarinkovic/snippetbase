import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { postFilePaths, CODE_PATH } from "../../utils/mdx-code";

const components = {
  Head,
};

interface ParamProps {
  params: {
    slug: string;
  };
};

interface CodeProps {
  source: any;
  frontMatter: {
    title: string;
    author: string;
    date: string;
  };
}

const CodePage: NextPage<CodeProps> = ({ frontMatter, source }) => {
  return (
    <>
      <Head>
        <title> {frontMatter.title} </title>
        <meta name="description" content="Codebase for developers and designers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </>
  );
};

export const getStaticProps = async ({ params }: ParamProps) => {
  const postFilePath = path.join(CODE_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
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

export default CodePage;
