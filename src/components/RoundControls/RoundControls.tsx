import { useContext } from "react";
import { Player } from "../../types";
import { DataContext } from "../../services/Provider";

function RoundControls() {
  const { players } = useContext(DataContext);

  return <div></div>;
}

export default RoundControls;
