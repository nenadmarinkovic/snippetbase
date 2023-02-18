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

function Items({ currentItems }: any) {
  const { filteredSnippets, handleSearchQuery } = useSearch(currentItems);

  return (
    <TableContainer>
      <SearchInput
        onChange={(e) => {
          handleSearchQuery;
        }}
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

function PaginatedItems({ itemsPerPage, snippets }: any) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = snippets.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(snippets.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % snippets.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
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
    </>
  );
}

export default PaginatedItems;
