import React from "react";

export const useSearch = (data: any) => {
  const allAnswers = data;

  const emptyQuery = "";
  const [searchQuery, setSearchQuery] = React.useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleSearchQuery = (e: any) => {
    const query = e.target.value;
    const filteredSnippets = data || [];

    const filteredData = filteredSnippets.filter((answer: any) => {
      const { title, description, category } = answer.data;
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        description.toLowerCase().includes(query.toLowerCase()) ||
        category.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchQuery({ filteredData, query });
  };

  const { filteredData, query } = searchQuery;
  const hasSearchResult = filteredData && query !== emptyQuery;
  const filteredSnippets = hasSearchResult ? filteredData : allAnswers;

  return { filteredSnippets, handleSearchQuery };
};
