import React, { createContext, useState } from "react";
import { Player, Round } from "../types";
import { createRound } from "./roundHandler";

type DataContextState = {
  players: Player[];
  rounds: Round[];
  addPlayer: (player: Player) => void;
  removePlayer: (id: string) => void;
  startRound: () => void;
};

const initialContextState: DataContextState = {
  players: [],
  rounds: [],
  addPlayer: () => {},
  removePlayer: () => {},
  startRound: () => {},
};

export const DataContext = createContext<DataContextState>(initialContextState);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [rounds, setRounds] = useState<Round[]>([]);

  const addPlayer = (player: Player) => {
    setPlayers((prevPlayers) => [player, ...prevPlayers]);
  };

  const removePlayer = (id: string) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== id),
    );
  };

  const startRound = () => {
    setRounds((prevRounds) => [createRound(players), ...prevRounds]);
  };

  const contextValues: DataContextState = {
    players,
    rounds,
    addPlayer,
    removePlayer,
    startRound,
  };

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
