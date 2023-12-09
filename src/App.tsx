import "./App.css";
import PlayerInput from "./components/PlayerInput";
import { Player } from "./types";
import { useState } from "react";
import PlayerList from "./components/PlayerList";
import TabContainer from "./components/TabContainer/TabContainer";
import DataProvider from "./services/Provider";

function App() {
  const [players, setPlayers] = useState<Player[]>([]);

  function addPlayer(player: Player) {
    setPlayers([...players, player]);
  }

  return (
    <div className="App">
      <DataProvider>
        <TabContainer />

        <PlayerInput addPlayer={addPlayer} />
        <PlayerList players={players} />
      </DataProvider>
    </div>
  );
}

/**
File download: https://www.altcademy.com/blog/how-to-write-file-in-reactjs/

 */

export default App;
