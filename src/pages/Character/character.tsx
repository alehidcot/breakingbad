import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetCharacterById, useGetRandomQuoteByAuthor } from "hooks";
import { Character, idCharacter, Quote } from "common/interfaces";
import { CircularLoading } from "components/CircularLoading";
import { CardCharacterDetail } from "components/CardCharacterDetail";
import { AlertDialog } from "components/AlertDialog";
import "./character.scss";

export const CharacterInfo: FC = () => {
  const { id, name } = useParams<idCharacter>();
  const [t] = useTranslation();
  const [character, setCharacter] = useState<Character>();
  const [quote, setQuote] = useState<Quote>();
  const [errorNotif, setErrorNotif] = useState<string>("");
  const { data, loading, error } = useGetCharacterById(id);
  const {
    data: quoteData,
    loading: quoteLoading,
    error: quoteError,
    refetch,
  } = useGetRandomQuoteByAuthor(name);

  useEffect(() => {
    if ((!loading || error) && Array.isArray(data) && data.length > 0) {
      setCharacter(data.find((x) => x));
    }

    if (error !== undefined) {
      setErrorNotif(t("character.errors.getCharacterById"));
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (
      (!quoteLoading || quoteError) &&
      Array.isArray(quoteData) &&
      quoteData.length > 0
    ) {
      setQuote(quoteData.find((x) => x));
    }

    if (quoteError !== undefined) {
      setErrorNotif(t("character.errors.getQuoteByAuthor"));
    }
  }, [quoteData, quoteLoading, quoteError]);

  const getAnotherQuote = () => {
    refetch();
  };

  return (
    <div>
      {error !== undefined ? (
        <AlertDialog isError={true} errorData={errorNotif} />
      ) : (
        <div className="character-container">
          {character ? (
            <CardCharacterDetail
              character={character}
              quote={quote?.quote}
              onActionQuote={getAnotherQuote}
            />
          ) : (
            <div>
              <CircularLoading />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
