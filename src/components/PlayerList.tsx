import { Stack } from "@mui/material";
import { Player } from "./../types";

interface PlayerListProps {
  players: Player[];
}

function PlayerList({ players }: PlayerListProps) {
  return (
    <div>
      <Stack spacing={2}>
        {players.map((player: Player) => (
          <Column player={player} />
        ))}
      </Stack>
    </div>
  );
}

function Column({ player }: { player: Player }) {
  return (
    <div>
      <p>{player.name}</p>
      <p>{player.isOMF}</p>
      <p>{player.score}</p>
    </div>
  );
}

export default PlayerList;
