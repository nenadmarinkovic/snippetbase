import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import {
  TableContainer,
  FlexTableHeader,
  FlexTableRow,
  FlexRow,
  SearchInput,
  NoResults,
} from "../styles/components/snippets";
import { useSearch } from "../hooks/useSearch";

function Snippets({ itemsPerPage, snippets }: any) {
  const [itemOffset, setItemOffset] = useState(0);
  const { filteredSnippets, handleSearchQuery } = useSearch(snippets);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredSnippets.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(snippets.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % snippets.length;
    setItemOffset(newOffset);
  };

  const handlePageChange = ({ selected }: any) => {
    setItemOffset(selected);
  };

  return (
    <TableContainer>
      <SearchInput
        onInput={() => handlePageChange({ selected: 0 })}
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
      {currentItems.length > 0 ? (
        currentItems.map((snippet: any, index: any) => (
          <Link
            className="snippet-item"
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
      <ReactPaginate
        nextLabel={
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        }
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </TableContainer>
  );
}

export default Snippets;
