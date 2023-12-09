export type Player = {
  id: string;
  name: string;
  isOMF: boolean;
  score: number;
};

export type Match = {
  player1: Player;
  player2: Player;
  player1Score: number;
  player2Score: number;
  result: "p1" | "p2" | "draw" | null;
};

export type Round = {
  pairings: Match[];
  roundNumber: number;
};

export type Tournament = {
  id: number;
  matches: Match[];
  allPlayers: Player[];
  dropedPlayers: Player[];
};
