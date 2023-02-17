import React from "react";
import Link from "next/link";
import {
  TableContainer,
  FlexTableHeader,
  FlexTableRow,
  FlexRow,
} from "../styles/components/snippets";

function Snippets({ snippets }: any) {
  return (
    <TableContainer>
      <FlexTableHeader>
        <FlexRow>Date</FlexRow>
        <FlexRow>Name</FlexRow>
        <FlexRow>Description</FlexRow>
        <FlexRow>Category</FlexRow>
      </FlexTableHeader>
      {snippets.map((snippet: any, index: any) => (
        <Link
          key={index}
          as={`/snippet/${snippet.filePath.replace(/\.mdx?$/, "")}`}
          href={`/snippet/[slug]`}
        >
          <FlexTableRow>
            <FlexRow>{snippet.data.date}</FlexRow>
            <FlexRow>{snippet.data.title}</FlexRow>
            <FlexRow>{snippet.data.description}</FlexRow>
            <FlexRow>{snippet.data.category}</FlexRow>
          </FlexTableRow>
        </Link>
      ))}
    </TableContainer>
  );
}

export default Snippets;
