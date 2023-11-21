// // Create a board containing: 4 lines 2 vert 2 horizontal which create 9 spaces

// // it is a 2 player game each player gets a turn per round and is either X or O

// // first player to connect 3 in a row is lableled victorius

// //////////////////////////////////////////
// // constants

// //////////////////////////////////////////
// //this section is going to hold things like jplayers, colors and anything that might be useful
// // to refer to but doesn't change over the course of gameplay
// // the only constat we're going to use to 

// const colors = {
//     p1: 'X',
//     p2:  'O',
//     '-1': 'green'
// }
// //////////////////////////////////////////
// // state variables
// //////////////////////////////////////////
// //things that we wannt to constatnly check, refer to, and change
// //these will allow us to properly render changes at the right time

// let board; // eventually will be an array 
// let turn; // will be a valuue of 1 or -1
// let winner; // will be eventually 1 or -1 or T for tie


// //const markerEls = [...board.document.querySelector('#markers > div')]
// //console.log('markerEls \n', markerEls)
// //////////////////////////////////////////
// // functions
// //////////////////////////////////////////
// // set values for the state variable
// function init() {
//     turn = 1
//     winner = null

//     board = [
//         [0, 0, 0], //column 1
//         [0, 0, 0], //column 2 // will use this to mark spots
//         [0, 0, 0], //column 3// and eventually find a winner
//     ]
//     render()
// }

// init()
// //////////////////////////////////////////
// // cached DOM elements
// //////////////////////////////////////////
// // grab our HTML elements, save them to variables and use later
// const messageEl = document.querySelector('h2')
// const playAgainButton = document.querySelector('button')
// // grab the marker elements and save them to an array
// //
// // call the render function once the render function is built

// // building the renderBoard Function which renders the gameBoard
// function renderBoard(){
//     // will loop over the boar array that repersents the board
//     //apply a background color  for the elements will  be x or 0
//     board.forEach((colArr, colIdx) => {
//         // colArr is the column, colId is the row  withing the array
//         //  console.log('colArr', colArr)
//         //  console.log('colIdx', colIdx)
//         colArr.forEach((cellVal, rowIdx) => {
//             //   console.log('cellVall', rowIdx)
//             //   console.log('rowId', rowIdx)
//             // determine the id of the element
//             const cellId = `c${colIdx}r${rowIdx}`
//              console.log('cellId', cellId)

//              const cellEl = document.getElementById(cellId)

//              cellEl.style.f = colors[1]

//         })


//     });
// }

// function render(){
//     // call renderBoard
//     renderBoard()
//     //call renderMessage

//     // call renderControls

// }

//////////////////////////////////////////
// event listeners
//////////////////////////////////////////
//board = TicTac

//NEWWWW

const ticTac = document.querySelectorAll('.square') //square is the name of my class

let playerTurn = "X";
let loser = false 

const win = [  //winning condition = win
    // horizontal win conditions
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical win conditions
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal win conditions 
    [0, 4, 8],
    [2, 4, 6]
];

const checkForWin = () => {
    win.forEach((condition,i) => {
    console.log()
    if(ticTac[condition[0]].innerText !== "" && ticTac[condition[0]].innerText === ticTac[condition[1]].innerText && ticTac[condition[1]].innerText === ticTac[condition[2]].innerText){
        console.log('Win!')
        loser = true
    }
})
}

const runIt = (e) => {
    if(loser == true || e.target.innerText != ""){
        return
    }
    e.target.innerText = playerTurn
    playerTurn = playerTurn === "X" ? "O" : "X"
    checkForWin()
    renderButton();
}
ticTac.forEach((square) => {
square.addEventListener('click', (e)=>{runIt(e)})
})

function reset(e) {
    if (loser === true) {
        ticTac.forEach((e) => {
            e.innerText = ""
});
    }
    loser = false ;
}
function renderButton() {
    playButton = document.querySelector('.button-grow')
    playButton.style.visibility = loser ? 'visible' : 'hidden'
}

document.querySelector('button').addEventListener('click', (e)=>{reset(e)})














