import About from "components/About";
import fs from "fs";
import Head from "next/head";
import Link from "next/link";
import matter from "gray-matter";
import path from "path";
import Category from "components/Category";
import Header from "components/Header";
import { Inter } from "@next/font/google";
import { postFilePaths, CODE_PATH } from "../utils/mdx-code";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }: any) {
  return (
    <>
      <Head>
        <title>Snippetbase</title>
      </Head>

      <main className={inter.className}>
        <Header />
        <section>
          <div className="container">
            <About
              text="Snippetbase is a codebase for developers and designers focused on
    simplicity, functionality, and unobtrusive design."
            />
            <Category name="All" />
            <Category name="CSS" />
            <Category name="JavaScript" />
            <Category name="React" />
            <div className="flex flex-col">
              {posts.map((post: any) => (
                <li key={post.filePath}>
                  <Link
                    as={`/code/${post.filePath.replace(/\.mdx?$/, "")}`}
                    href={`/code/[slug]`}
                  >
                    <h3>{post.data.title}</h3>
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(CODE_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
