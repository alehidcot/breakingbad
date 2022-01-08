import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import { Character } from "common/interfaces";
import "./characterList.scss";

interface CharacterListProps {
  characters: Character[];
  getCharacterById: any;
}

export const CharacterList = ({
  characters,
  getCharacterById,
}: CharacterListProps) => {
  return (
    <List className="list-container">
      {characters.map((character: any) => {
        return (
          <ListItem
            disablePadding
            key={character.char_id}
            onClick={() =>
              getCharacterById(
                character.char_id,
                character.name.split(" ").join("+")
              )
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <Avatar alt={character.name.charAt(0)} src={character.img} />
              </ListItemIcon>
              <ListItemText primary={character.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
