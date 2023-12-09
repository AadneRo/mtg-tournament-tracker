import { Box, TextField, Button, Checkbox } from "@mui/material";
import { useId, useState } from "react";

import { Player } from "./../types";

interface PlayerInputProps {
  addPlayer: (player: Player) => void;
}

function PlayerInput({ addPlayer }: PlayerInputProps) {
  const [name, setName] = useState("");
  const [isOMF, setIsOMF] = useState(false);
  const id = useId();

  const handleClick = () => {
    const player: Player = {
      name,
      isOMF,
      id: id,
      score: 0,
    };

    addPlayer(player);
  };

  return (
    <Box>
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        onChange={(e) => setName(e.target.value)}
      />
      <Checkbox label="OMF" onChange={() => setIsOMF(!isOMF)}>
        OMF
      </Checkbox>

      <Button variant="contained" onClick={handleClick}>
        Add
      </Button>
    </Box>
  );
}

export default PlayerInput;
