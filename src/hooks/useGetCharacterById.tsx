import { useAxios } from "use-axios-client";
import { CharacterByIdResponse } from "common/interfaces";

export const useGetCharacterById = (
  char_id: number | string
): CharacterByIdResponse => {
  const { data, error, loading } = useAxios({
    url: `https://www.breakingbadapi.com/api/characters/${char_id}`,
  });

  return {
    data,
    loading,
    error,
  };
};
