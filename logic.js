const circle_mark= 'O';
const x_mark = 'X';
let currentPlayer = x_mark;
const tracker = []
const gameBoard = document.querySelectorAll(".box")
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
const clickedBox = (event) => {

    
    const id = event.target.id;
    if (!tracker[id] && !Winner()) { 
      tracker[id] = currentPlayer;
      event.target.innerText = currentPlayer;
      
      
    }

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



//function gameOver(){
//     if(playerWon==true)
// }
