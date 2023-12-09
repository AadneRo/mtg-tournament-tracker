import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useId, useState, useContext } from "react";
import { DataContext } from "../services/Provider";
import { Player } from "./../types";

function PlayerInput() {
  const [name, setName] = useState("");
  const [isOMF, setIsOMF] = useState(false);
  const id = useId();

  const { addPlayer } = useContext(DataContext);

  const handleClick = () => {
    const player: Player = {
      name,
      isOMF,
      id: id,
      score: 0,
    };
    if (name === "") {
      return;
    }
    addPlayer(player);
    setName("");
  };

  return (
    <Box>
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FormControlLabel
        control={<Checkbox onChange={() => setIsOMF(!isOMF)} />}
        label="OMF Member:"
        labelPlacement="top"
      />

      <Button variant="contained" onClick={handleClick}>
        Add
      </Button>
    </Box>
  );
}

export default PlayerInput;
