import { Player, Match, Tournament } from "../types";
import {createContext, useState} from "react";

interface DataContextState  {
    players: Player[],
    matches: Match[],
    tournaments: Tournament[],
    addPlayer: (player: Player) => void,
    removePlayer: (id: string) => void,
}

const DataContext = createContext<DataContextState>({
    players: [],
    matches: [],
    tournaments: [],
    addPlayer: (p: Player) => undefined,
    removePlayer: (id: string) => undefined,
});

function DataProvider({children}: {children: React.ReactNode}) {

    const [players, setPlayers] = useState<Player[]>([])

    function addPlayer (player: Player) {
        setPlayers([...players, player])
    }

    function removePlayer (id: string) {
        setPlayers(players.filter((player) => player.id !== id))
    }

    const contextValues ={
      players,
      matches: [],
      tournaments: [],
      addPlayer,
      removePlayer
    }
return(
    <DataContext.Provider value={contextValues}>{children} </DataContext.Provider>
)
}


export default DataProvider;