import React from "react";
import Link from "next/link";
import {
  TableContainer,
  FlexTableHeader,
  FlexTableRow,
  FlexRow,
  SearchInput,
  NoResults
} from "../styles/components/snippets";
import { useSearch } from "../hooks/useSearch";

function Snippets({ snippets }: any) {
  const { filteredSnippets, handleSearchQuery } = useSearch(snippets);

  return (
    <TableContainer>
      <SearchInput
        onChange={handleSearchQuery}
        placeholder="Search..."
        type="text"
      />

      <FlexTableHeader>
        <FlexRow>Date</FlexRow>
        <FlexRow>Name</FlexRow>
        <FlexRow>Description</FlexRow>
        <FlexRow>Category</FlexRow>
      </FlexTableHeader>
      {filteredSnippets.length > 0 ? (
        filteredSnippets.map((snippet: any, index: any) => (
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
        ))
      ) : (
        <NoResults>No results. Please try with different word.</NoResults>
      )}
    </TableContainer>
  );
}

export default Snippets;
