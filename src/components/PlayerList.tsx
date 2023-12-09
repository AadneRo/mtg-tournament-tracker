import { DataContext } from "../services/Provider";
import { useContext } from "react";
import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

type PlayerListProps = {
  canEdit: boolean;
};

function PlayerList({ canEdit }: PlayerListProps) {
  const { players } = useContext(DataContext);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">OMF member</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow
              key={player.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {player.name}
              </TableCell>
              <TableCell align="right">{player.isOMF ? "✅" : "❌"}</TableCell>
              <TableCell align="right">{player.score}</TableCell>
              <TableCell align="right">
                {canEdit && (
                  <Button variant="contained" color="error">
                    Edit
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default PlayerList;
