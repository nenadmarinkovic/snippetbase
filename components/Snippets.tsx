import React from "react";
import Link from "next/link";

function Snippets({ posts }: any) {
  return (
    <div className="table-container" aria-label="Destinations">
      <div className="flex-table header">
        <div className="flex-row">Date</div>
        <div className="flex-row">Name</div>
        <div className="flex-row">Description</div>
        <div className="flex-row">Category</div>
      </div>
      {posts.map((post: any, index: any) => (
        <Link
          key={index}
          as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
          href={`/posts/[slug]`}
        >
          <div className="flex-table row">
            <div className="flex-row">{post.data.date}</div>
            <div className="flex-row">{post.data.title}</div>
            <div className="flex-row">{post.data.description}</div>
            <div className="flex-row">{post.data.category}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Snippets;
