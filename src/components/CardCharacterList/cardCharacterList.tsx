import { useTranslation } from "react-i18next";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Character } from "common/interfaces";
import { CharacterList } from "components/CharacterList";
import "./cardCharacterList.scss";

interface CardCharacterListProps {
  characters: Character[];
  getCharacterById: any;
}

export const CardCharacterList = ({
  characters,
  getCharacterById,
}: CardCharacterListProps) => {
  const [t] = useTranslation();
  return (
    <Card className="card">
      <CardContent className="card-content">
        <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
          {t("home.title")}
        </Typography>
        <Divider />
        <CharacterList
          characters={characters}
          getCharacterById={getCharacterById}
        />
      </CardContent>
    </Card>
  );
};
