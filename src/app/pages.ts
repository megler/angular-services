// Interface so you can pass in Wiki API JSON in page-list ts without using the 'any' keyword.
export interface Pages {
  query: {
    search: {
      title: string;
      wordcount: number;
      snippet: string;
      pageid: number;
    }[];
  };
}
