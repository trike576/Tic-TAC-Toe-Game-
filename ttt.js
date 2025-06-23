let squares = document.querySelectorAll('.squares');
let container = document.getElementById("container");
let whoseTurn = document.getElementById("whoseTurn");
let whoWins = document.getElementById("whoWins");
let newGame = document.getElementById("newGame");
let countOfTurns = 0;
let firstTimeOrNot = 0;
let turnNo = Math.ceil(Math.random()*2);
let winPattern = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
let winnerChecker = () => {
  for (let pattern of winPattern) {
    let [a,
      b,
      c] = pattern;

    let pos1 = document.getElementById("sq" + getRowCol(a));
    let pos2 = document.getElementById("sq" + getRowCol(b));
    let pos3 = document.getElementById("sq" + getRowCol(c));
    if (
      pos1.innerText !== "" &&
      pos1.innerText === pos2.innerText &&
      pos2.innerText === pos3.innerText
    ) {
      whoWins.innerText = `Player ${pos1.innerText} wins! `;
      squares.forEach(square => (square.disabled = true));
    }
  }
};

// Converts 1–9 into 2-digit IDs like 1 -> 11, 2 -> 12, etc.
function getRowCol(num) {
  const row = Math.ceil(num / 3);
  const col = num % 3 === 0 ? 3: num % 3;
  return `${row}${col}`;
}
let turn;


let sq11 = document.getElementById("sq11");
let sq12 = document.getElementById("sq12");
let sq13 = document.getElementById("sq13");
let sq21 = document.getElementById("sq21");
let sq22 = document.getElementById("sq22");
let sq23 = document.getElementById("sq23");
let sq31 = document.getElementById("sq31");
let sq32 = document.getElementById("sq32");
let sq33 = document.getElementById("sq33");

if (turnNo == 1) {
  turn = "O";
  whoseTurn.innerText = "It's O's turn";
  whoseTurn.classList.add('whoseTurn');
} else {
  turn = "X";
  whoseTurn.innerText = "It's X's turn";
  whoseTurn.classList.add('whoseTurn');
}

squares.forEach(square => {
  square.addEventListener("click", ()=> {
    if (turn == "O") {
      square.innerText = "O";
      turn = "X";
      whoseTurn.innerText = `It's ${turn}'s turn`;
      winnerChecker();
      square.disabled = true;
      countOfTurns++;
      if (countOfTurns == 9) {
        whoWins.innerText = "Draw";
        squares.forEach(square => (square.disabled = true));
        whoseTurn.innerText="";
        countOfTurns=0;
      }
      if (countOfTurns >= 1) {
        if (firstTimeOrNot == 0) {
          newGame.innerText = "Play Again";
          newGame.classList.add('newGame');
          firstTimeOrNot = 1;
        }
      }

    } else {
      square.innerText = "X";
      turn = "O";
      whoseTurn.innerText = `It's ${turn}'s turn`;
      winnerChecker();
      square.disabled = true;
      countOfTurns++;
      if (countOfTurns >= 1) {
        if (firstTimeOrNot == 0) {
          newGame.innerText = "Play Again";
          newGame.classList.add('newGame');
          firstTimeOrNot = 1;
        }
      }

    }
  });
});
newGame.addEventListener("click", ()=> {
  squares.forEach(square => {
    square.innerText = "";
    countOfTurns = 0;
    firstTimeOrNot = 0;
    turnNo = Math.ceil(Math.random()*2);
    square.disabled = false;
    whoWins.innerText = "";
    whoseTurn.innerText = "";
    if (turnNo == 1) {
      turn = "O";
      whoseTurn.innerText = "It's O's turn";
      whoseTurn.classList.remove('whoseTurn');
      void whoseTurn.offsetWidth;
      whoseTurn.classList.add('whoseTurn');
    } else {
      turn = "X";
      whoseTurn.classList.remove('whoseTurn');
      void whoseTurn.offsetWidth;
      whoseTurn.innerText = "It's X's turn";
      whoseTurn.classList.add('whoseTurn');
    }
  })
});