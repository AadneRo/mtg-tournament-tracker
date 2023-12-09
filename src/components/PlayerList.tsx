import { Stack, Paper } from "@mui/material";
import { Player } from "./../types";
import { styled } from "@mui/material/styles";

const StackItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

interface PlayerListProps {
  players: Player[];
}

function PlayerList({ players }: PlayerListProps) {
  return (
    <div>
      <Stack spacing={2}>
        {players.map((player: Player) => (
          <Column player={player} key={player.id} />
        ))}
      </Stack>
    </div>
  );
}

function Column({ player }: { player: Player }) {
  return (
    <StackItem>
      <p>{player.name}</p>
      <p>{player.isOMF}</p>
      <p>{player.score}</p>
    </StackItem>
  );
}

export default PlayerList;
