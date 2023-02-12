import React from "react";
import Link from "next/link";

function Snippets({ posts }: any) {
  return (
    <div className="table-container" role="table" aria-label="Destinations">
      <div className="flex-table header" role="rowgroup">
        <div className="flex-row first" role="columnheader">
          Date
        </div>
        <div className="flex-row" role="columnheader">
          Name
        </div>
        <div className="flex-row" role="columnheader">
          Description
        </div>
        <div className="flex-row" role="columnheader">
          Category
        </div>
      </div>
      {posts.map((post: any, index: any) => (
        <Link
          key={index}
          as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
          href={`/posts/[slug]`}
        >
          <div className="flex-table row" role="rowgroup">
            <div className="flex-row first" role="cell">
              {post.data.date}
            </div>
            <div className="flex-row" role="cell">
              {post.data.title}
            </div>
            <div className="flex-row" role="cell">
              {post.data.description}
            </div>
            <div className="flex-row" role="cell">
              {post.data.category}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Snippets;
