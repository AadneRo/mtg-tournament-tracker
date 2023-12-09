import { useContext, useId } from "react";
import { DataContext } from "../../services/Provider";
import PlayerList from "../PlayerList";
import { Button } from "@mui/material";
import { Round, Match, Player } from "../../types";

function RoundControls() {
  const { players, rounds, startRound } = useContext(DataContext);

  console.log(rounds);
  return (
    <div>
      {rounds.length === 0 && (
        <div>
          <p>
            No round has been started, do you want to start the first round with
            the players bellow?
          </p>
          <Button onClick={startRound}>Start Round</Button>
        </div>
      )}
      <PlayerList canEdit={false} />

      {rounds.length > 0 && (
        <div>
          {rounds.map((round: Round) => {
            return (
              <div key={useId()}>
                <p>Round {round.roundNumber}</p>
                <ViewMatch pairings={round.pairings} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ViewMatch({ pairings }: { pairings: Match[] }) {
  return (
    <div>
      {pairings.map((pairing) => (
        <div key={useId()}>
          <p>
            {pairing.player1.name} vs {pairing.player2.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RoundControls;
