export type Player = {
  id: number;
  name: string;
  OMF: boolean;
  score: number;
};

export type Match = {
  id: number;
  player1: Player;
  player2: Player;
  player1Score: number;
  player2Score: number;
  winner: Player;
};

export type Tournament = {
  id: number;
  name: string;
  matches: Match[];
};
