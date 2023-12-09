import { useContext } from "react";
import { DataContext } from "../../services/Provider";
import PlayerList from "../PlayerList";
import { Button, P } from "@mui/material";

function RoundControls() {
  const { players, rounds, nextRound } = useContext(DataContext);

  return (
    <div>
      {rounds.length === 0 && (
        <div>
          <P>
            No round has been started, do you want to start the first round with
            the players bellow?
          </P>
          <Button onClick={nextRound}>Start Round</Button>
        </div>
      )}
      <PlayerList players={players} canEdit={false} />
    </div>
  );
}

export default RoundControls;
