const BOARDSIZE = 3;
let gameActive = true;
let gameState = ["","","","","","","","","",];
const circle_mark= 'O';
const x_mark = 'X';
let currentPlayer = x_mark;
const tracker = []
const gameBoard = document.querySelectorAll(".box")
console.log(gameBoard)
console.log(gameBoard[0]);
const restart = document.querySelector(".buttons")

const reset = () =>{
    tracker.forEach((spot, i)=> {
        tracker[i] = null;
    })
    
    gameBoard.forEach((square)=>{
        square.innerText = "";
    })  
    }
    
restart.addEventListener("click", reset)


const Winner = () =>{
    if(tracker[0]===currentPlayer){
        if(tracker[1] === currentPlayer && tracker[2] === currentPlayer){
            alert(currentPlayer + " is the winner!")
            reset()
            
            return true;
        } 
        if(tracker[3] === currentPlayer && tracker[6] === currentPlayer){
            alert(currentPlayer + " is the winner!")
            reset()
            return true;
        }

        if(tracker[4] === currentPlayer && tracker[8] === currentPlayer){
            alert(currentPlayer + " is the winner!")
            reset()
            return true;
        }
    }
    
    if(tracker[2] === currentPlayer){
        if(tracker[4] === currentPlayer && tracker[6] === currentPlayer){
            alert(currentPlayer + " is the winner!")
            reset()
            return true;
        }
        if(tracker[5] === currentPlayer && tracker[8] === currentPlayer){
            alert(currentPlayer + " is the winner!")
            reset()
            return true;
    }
}

    if(tracker[1] === currentPlayer){
        if(tracker[4] === currentPlayer && tracker[7] == currentPlayer){
            alert(currentPlayer + " is the winner!")
            reset()
            return true;
    }
}

    if(tracker[3] === currentPlayer){
        if(tracker[4] === currentPlayer && tracker[5] === currentPlayer){
            reset()
            return true;
        }
    }

    if(tracker[6] === currentPlayer){
        if(tracker[7] === currentPlayer && tracker[8] === currentPlayer){
            reset()
            return true;
        }
    }


}
// if(Winner()){
//     console.log("PICKLES!!!");
//     alert(currentPlayer + " is the winner!")
// }
const clickedBox = (event) => {

    
    const id = event.target.id;
    if (!tracker[id] && !Winner()) { 
      tracker[id] = currentPlayer;
      event.target.innerText = currentPlayer;
      
      
    }
    //I might have to put this at the top of the method

    if(Winner()){
        return;
    }

    if(Draw()){
        return;
    }

    if(currentPlayer === x_mark){
        currentPlayer = circle_mark
        alert("It's " + currentPlayer + "'s turn")
    }
    else{
        currentPlayer = x_mark
        alert("It's " + currentPlayer + "'s turn")
    }
    // if(!Winner()){
    //     alert("It's " + currentPlayer + "'s turn")
    // }
}


gameBoard.forEach((square)=> {
    square.addEventListener('click', clickedBox);
    
});


 








const Draw = () =>{
    let tie = 0;
    tracker.forEach((square, i) =>{
        if(tracker[i] != null)
        tie++
    });
    if (tie === 9){
        alert("The match is a draw")
    }



}

// function winningCombinations{
//{ 0, 1, 2 }(done), { 3, 4, 5 }, { 6, 7, 8 }, // horizontal wins
// { 0, 3, 6 }(done), { 1, 4, 7 }(done), { 2, 5, 8 }(done), // vertical wins
// 	{ 0, 4, 8 }(done), { 2, 4, 6 }(done) // diagonal wins
// }



//function gameOver(){
//     if(playerWon==true)
// }
