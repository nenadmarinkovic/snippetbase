export type ItemType = {
  itemsPerPage: number;
};

export type SnippetType = {
  snippets: [
    content: string,
    filePath: string,
    data: {
      title: string;
      category: string;
      date: string;
      description: string;
    }
  ];
};

export type SourceType = {
  source: object;
};

export type FrontmatterType = {
  frontMatter: {
    title: string;
    category: string,
    description: string;
    link: string;
    date: string;
  };
};
