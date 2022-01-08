import { FC, useContext } from "react";
import UserContext from "context/User";
import { getFullName } from "common/interfaces";
import { LanguageSelector } from "components/LanguageSelector";
import Typography from "@mui/material/Typography";
import "./header.scss";

export const Header: FC = () => {
  const user = useContext(UserContext);

  return (
    <div className="header-container">
      <img
        className="img-title"
        src="breaking-bad-wide2.png"
        alt="Breaking Bad"
      />
      <div className="header-data">
        <LanguageSelector />
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          className="username"
        >
          {getFullName(user)}
        </Typography>
      </div>
    </div>
  );
};
