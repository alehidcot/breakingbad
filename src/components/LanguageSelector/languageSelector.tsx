import { FC, useEffect, useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { DEFAULT_LANGUAGE } from "common/constants";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const LanguageSelector: FC = () => {
  const [t, i18n] = useTranslation();
  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleLanguage = (
    event: MouseEvent<HTMLElement>,
    newLanguage: string
  ) => {
    setLanguage(newLanguage);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={language}
      exclusive
      onChange={handleLanguage}
      aria-label="text alignment"
    >
      <ToggleButton value="en" aria-label="left aligned">
        en
      </ToggleButton>
      <ToggleButton value="es" aria-label="right aligned">
        es
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
