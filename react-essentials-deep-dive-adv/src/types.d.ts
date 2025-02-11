type GameBoardType = (null | PlayerSymbol)[][];

type PlayerSymbol = "O" | "X";

interface PlayerType {
  X: string;
  O: string;
}

interface TurnType {
  square: { row: number; col: number };
  player: PlayerSymbol;
}

type TurnsType = TurnType[];
