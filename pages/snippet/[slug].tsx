import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Header from "../../components/Header";
import { NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { postFilePaths, SNIPPETS_PATH } from "../../utils/mdx-snippets";
import { MainWrap, Main } from "../../styles/components/layout";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import Footer from "@/components/Footer";
import {
  SlugContainer,
  SlugInfo,
  SlugMain,
  SlugTitle,
  SlugDate,
  SlugDescription,
  SlugCategory,
} from "@/styles/pages/slug";
import { FrontmatterType, SourceType } from "@/lib/types";

type PropTypes = SourceType & FrontmatterType;

const components = {
  Head,
};

const PostPage: NextPage<PropTypes> = ({ source, frontMatter }: PropTypes) => {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content="Web development and design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainWrap>
        <Header />
        <Main>
          <SlugContainer>
            <SlugInfo>
              <SlugTitle>{frontMatter.title}</SlugTitle>
              <SlugDate>{frontMatter.date}</SlugDate>
              <SlugDescription>{frontMatter.description}</SlugDescription>
              <SlugCategory>{frontMatter.category}</SlugCategory>
            </SlugInfo>
            <SlugMain>
              <MDXRemote
                compiledSource={""}
                scope={undefined}
                frontmatter={undefined}
                {...source}
                components={components}
              />
            </SlugMain>
          </SlugContainer>
        </Main>
        <Footer />
      </MainWrap>
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
