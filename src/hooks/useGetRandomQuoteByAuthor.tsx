import { useAxios } from "use-axios-client";
import { QuoteByAuthorResponse } from "common/interfaces";

export const useGetRandomQuoteByAuthor = (
  author: string
): QuoteByAuthorResponse => {
  const { data, error, loading, refetch } = useAxios({
    url: `https://www.breakingbadapi.com/api/quote/random?author=${author}`,
  });

  return {
    data,
    loading,
    error,
    refetch,
  };
};
