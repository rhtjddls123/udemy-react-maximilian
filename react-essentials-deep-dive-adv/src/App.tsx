import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { PLAYERS } from "./utils/constant";
import { deriveActivePlayer, deriveGameBoard, deriveWinner } from "./utils/util";

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState<TurnsType>([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const isDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIdx: number, colIdx: number) => {
    setGameTurns((prevTurns) => {
      const playerSymbol = deriveActivePlayer(prevTurns);

      const updateTurns: TurnsType = [
        { square: { row: rowIdx, col: colIdx }, player: playerSymbol },
        ...prevTurns
      ];

      return updateTurns;
    });
  };

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handleSetName = (symbol: PlayerSymbol, newName: string) => {
    setPlayers((prevPlayer) => {
      return { ...prevPlayer, [symbol]: newName };
    });
  };

  return (
    <main>
      <div className="container relative max-w-3xl bg-black my-12 mx-auto p-8 rounded-md shadow-md">
        <ol className="flex justify-center my-4 items-center gap-10">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handleSetName}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handleSetName}
          />
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
