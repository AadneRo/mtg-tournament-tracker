import { Player, Round, Match } from "./../types";

export function createRound(players: Player[], previousRound?: Round): Round {
  // Add a bye player to the end of the players array if it's an odd number
  if (players.length % 2 === 1) {
    players.push({ id: "BYE", name: "BYE", isOMF: false, score: 0 });
  }

  if (!previousRound) {
    const pairings = randomlyPairPlayers(players);

    console.log(pairings);

    return {
      pairings,
      roundNumber: 1,
    };
  }

  return {
    pairings: [],
    roundNumber: 1,
  };
}

function randomlyPairPlayers(players: Player[]): Match[] {
  // Make a copy of the players array to avoid mutating the original array
  const shuffledPlayers: Player[] = [...players];

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = shuffledPlayers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPlayers[i], shuffledPlayers[j]] = [
      shuffledPlayers[j],
      shuffledPlayers[i],
    ];
  }

  // Pair up the players
  const pairings: Match[] = [];
  for (let i = 0; i < shuffledPlayers.length; i += 2) {
    const pair: Match = {
      player1: shuffledPlayers[i],
      player2: shuffledPlayers[i + 1],
      player1Score: 0,
      player2Score: 0,
      result: null,
    };
    pairings.push(pair);
  }

  return pairings;
}
