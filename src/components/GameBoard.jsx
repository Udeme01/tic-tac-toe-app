// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

const GameBoard = ({ onSelectSquare, board }) => {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   // if your state is an object or array, you update that state in an immutable way.(you create a copy of the old state)
  //   const handleSelectSquare = (rowIndex, colIndex) => {
  //     setGameBoard((prevGameBoard) => {
  //       let updatedGameBoard = [
  //         ...prevGameBoard.map((innerArr) => [...innerArr]),
  //       ];
  //       updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedGameBoard;
  //     });

  //     onSelectSquare();
  //   };

  //   let gameBoard = initialGameBoard;

  //   for (const turn of turns) {
  //     const { square, player } = turn;
  //     const { row, col } = square;

  //     gameBoard[row][col] = player;
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
