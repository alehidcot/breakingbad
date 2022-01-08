import { FC, useEffect, useState } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetAllCharacters } from "hooks";
import { Character } from "common/interfaces";
import { CircularLoading } from "components/CircularLoading";
import { CardCharacterList } from "components/CardCharacterList";
import { AlertDialog } from "components/AlertDialog";
import "./home.scss";

export const Home: FC = () => {
  const history = useHistory();
  const [t] = useTranslation();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [errorNotif, setErrorNotif] = useState<string>("");
  const { data, loading, error } = useGetAllCharacters();

  const getCharacterByID = (char_id: number, name: string) => {
    history.push(`/character/${char_id}/${name}`);
  };

  useEffect(() => {
    if ((!loading || error) && Array.isArray(data)) {
      setCharacters(data);
    }

    if (error !== undefined) {
      setErrorNotif(t("home.errors.getAllCharacters"));
    }
  }, [data, loading, error]);

  return (
    <Router>
      {error !== undefined ? (
        <AlertDialog isError={true} errorData={errorNotif} />
      ) : (
        <div className="home-container">
          {characters.length > 0 ? (
            <CardCharacterList
              characters={characters}
              getCharacterById={getCharacterByID}
            />
          ) : (
            <div>
              <CircularLoading />
            </div>
          )}
        </div>
      )}
    </Router>
  );
};
