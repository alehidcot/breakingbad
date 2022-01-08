export interface Character {
  appearance: string[];
  better_call_saul_appearance: any[];
  birthday: string;
  category: string;
  char_id: number;
  img: string;
  name: string;
  nickname: string;
  occupation: string[];
  portrayed: string;
  status: string;
}

export interface idCharacter {
  id: string;
  name: string;
}

export interface AllCharactersResponse {
  data: Character[] | unknown;
  loading?: boolean;
  error?: any;
}

export interface CharacterByIdResponse {
  data: Character[] | unknown;
  loading?: boolean;
  error?: any;
}
