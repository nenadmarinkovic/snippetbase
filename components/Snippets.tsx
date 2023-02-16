import React from "react";
import Link from "next/link";
import {
  TableContainer,
  FlexTableHeader,
  FlexTableRow,
  FlexRow,
} from "../styles/components/snippets";

function Snippets({ posts }: any) {
  return (
    <TableContainer>
      <FlexTableHeader>
        <FlexRow>Date</FlexRow>
        <FlexRow>Name</FlexRow>
        <FlexRow>Description</FlexRow>
        <FlexRow>Category</FlexRow>
      </FlexTableHeader>
      {posts.map((post: any, index: any) => (
        <Link
          key={index}
          as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
          href={`/posts/[slug]`}
        >
          <FlexTableRow>
            <FlexRow>{post.data.date}</FlexRow>
            <FlexRow>{post.data.title}</FlexRow>
            <FlexRow>{post.data.description}</FlexRow>
            <FlexRow>{post.data.category}</FlexRow>
          </FlexTableRow>
        </Link>
      ))}
    </TableContainer>
  );
}

export default Snippets;
