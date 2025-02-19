import { WINNING_COMBINATIONS } from "../winning-combinations";
import { INITIAL_GAME_BOARD } from "./constant";

export function deriveGameBoard(gameTurns: TurnsType) {
  const gameBoard = [...INITIAL_GAME_BOARD.map((arr) => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

export function deriveActivePlayer(gameTurns: TurnsType) {
  let playerSymbol: PlayerSymbol = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    playerSymbol = "O";
  }

  return playerSymbol;
}

export function deriveWinner(gameBoard: GameBoardType, players: PlayerType) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}
