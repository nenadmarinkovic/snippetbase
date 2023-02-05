import React, { useState, useEffect } from "react";
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
import Footer from "components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }: any) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  const filterCategory = (category: string) => {
    const filteredPosts = posts.filter(
      (post: any) => post.data.category === category
    );

    setFilteredPosts(filteredPosts);
  };

  const uniqueCategoriesOnLoad = (posts: any) => {
    const categories = posts
      .map((post: any) => post.data.category)
      .filter((item: any, index: any, arr: any) => arr.indexOf(item) === index);

    setUniqueCategories(categories);
  };

  const resetCategories = () => {
    setFilteredPosts(posts);
  };

  useEffect(() => {
    uniqueCategoriesOnLoad(posts);
  }, [posts]);

  return (
    <>
      <Head>
        <title>Snippetbase</title>
      </Head>
      
      <main className={`h-screen ${inter.className}`}>
        <Header />
        <section className="h-1pt-5 pb-48 bg-black">
          <div className="container">
            <About text="Snippetbase is a codebase for developers and designers focused on simplicity, functionality, and unobtrusive design." />
            <Category name="All" onClick={() => resetCategories()} />
            {uniqueCategories.map((category: any, index: any) => (
              <Category
                name={category}
                key={index}
                onClick={() => filterCategory(category)}
              />
            ))}
            <div className="flex flex-col mt-5">
              <ul className="mt-3">
                {filteredPosts.map((post: any) => (
                  <li key={post.filePath}>
                    <Link
                      as={`/code/${post.filePath.replace(/\.mdx?$/, "")}`}
                      href={`/code/[slug]`}
                    >
                      <h2 className="text-white mt-3 mb-3">{post.data.title}</h2>
                    </Link>
                    <hr />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
   
     
      <Footer/>
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
