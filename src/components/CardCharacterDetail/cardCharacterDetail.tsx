import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Character } from "common/interfaces";
import "./cardCharacterDetail.scss";

interface CardCharacterDetailProps {
  character: Character;
  quote?: string;
  onActionQuote: any;
}

export const CardCharacterDetail = ({
  character,
  quote,
  onActionQuote,
}: CardCharacterDetailProps) => {
  const history = useHistory();
  const [t] = useTranslation();

  const backToList = () => {
    history.push(`/`);
  };

  const {
    appearance,
    better_call_saul_appearance,
    birthday,
    img,
    name,
    nickname,
    occupation,
    portrayed,
    status,
  } = character;
  return (
    <Card className="card">
      <CardContent className="card-content">
        <div className="card-container">
          <div className="card-image-container">
            <img className="image-style" src={img} alt={name} />
          </div>
          <div className="card-info">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Divider />
            <Typography gutterBottom variant="subtitle1" component="div">
              {t("character.detail.nickname")}: {nickname}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {t("character.detail.birthday")}: {birthday}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {t("character.detail.portrayed")}: {portrayed}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {t("character.detail.occupation")}: {occupation.join()}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {t("character.detail.appearance")}: {appearance.join()}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {t("character.detail.betterCallSaulAppearance")}:{" "}
              {better_call_saul_appearance.join()}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {t("character.detail.status")}: {status}
            </Typography>
            <div className="quote-container">
              <Typography gutterBottom variant="subtitle1" component="div">
                {t("character.detail.quote")}: {quote}
              </Typography>
            </div>
            <div className="buttons-container">
              <Button size="small" onClick={() => onActionQuote()}>
                {t("character.buttons.anotherQuote")}
              </Button>
              <Button size="small" onClick={() => backToList()}>
                {t("character.buttons.backtoHome")}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
