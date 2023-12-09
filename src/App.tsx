import "./App.css";
import PlayerInput from "./components/PlayerInput";
import { Player } from "./types";
import { useState } from "react";
import PlayerList from "./components/PlayerList";

function App() {
  const [players, setPlayers] = useState<Player[]>([]);

  function addPlayer(player: Player) {
    setPlayers([...players, player]);
  }

  return (
    <div className="App">
      <PlayerInput addPlayer={addPlayer} />
      <PlayerList players={players} />
    </div>
  );
}

/**
File download: https://www.altcademy.com/blog/how-to-write-file-in-reactjs/

 */

export default App;
