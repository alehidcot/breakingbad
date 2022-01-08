import { useAxios } from "use-axios-client";
import { AllCharactersResponse } from "common/interfaces";

export const useGetAllCharacters = (): AllCharactersResponse => {
  const { data, error, loading } = useAxios({
    url: "https://www.breakingbadapi.com/api/characters",
  });

  return {
    data,
    loading,
    error,
  };
};
