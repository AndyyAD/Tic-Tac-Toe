const cells = document.querySelectorAll(".box");
const statusText = document.querySelector("#turn-info");
const resetBtn = document.querySelector("#reset");
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let turn = "X";
let running = false;

playGame();

function playGame() {
    cells.forEach(cell => cell.addEventListener("click", boxClicked));
    resetBtn.addEventListener("click", resetGame);
    statusText.textContent = `${turn}'s turn`;
    running = true;
}

function boxClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateBox(this, cellIndex);
    checkWin();
}

function updateBox(cell, index) {
    options[index] = turn;
    cell.textContent = turn;
}

function changeTurn() {
    turn = (turn == "X") ? "O" : "X";
    statusText.textContent = `${turn}'s turn`;
}

function checkWin() {
    let roundWon = false;

    for(let i = 0; i< win.length; i++) {
        const condition = win[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        document.querySelector(".win-msg").innerText = `${turn}'s Won..!`
        document.querySelector(".pop-win-msg").style.display = "block"
        running = false;
    }
    else if(!options.includes("")){
        document.querySelector(".win-msg").innerText = `It's Draw..!`
        document.querySelector(".pop-win-msg").style.display = "block"
        running = false;
    }
    else{
        changeTurn();
    }
}

function resetGame() {
    turn = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${turn}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running=true;
    document.querySelector(".pop-win-msg").style.display = "none"
}