console.log("Welcome to Tic-Tac-Toe")
let turn = "X"
let isgameover = false;

//Function to change the turn
const changeTurn = ()=> {
    return turn === "X"? "O" : "X"
}

//Function to check win
const checkWin = ()=> {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.win-msg  ').innerText = boxtext[e[0]].innerText + " Won..!"
            document.querySelector('.pop-win-msg').style.display = "block"
            isgameover = true;
        }
    })
}

// game function
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtexts = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtexts.innerText === '') {
            boxtexts.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = turn + " Turn";
            } 
        }
    })
})

//reset function
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = " ";
        turn = "X";
        isgameover = false;
        document.getElementsByClassName("info")[0].innerText  = turn + " Turn";
        document.querySelector('.pop-win-msg').style.display = "none"
    })
}) 