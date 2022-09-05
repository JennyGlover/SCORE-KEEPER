let scoreRange = document.querySelector('.number-input');
let playerOneScore = document.querySelector('.player-one-score');
let playerTwoScore = document.querySelector('.player-two-score');

let greenButton = document.querySelector('.green-button');
let blueButton = document.querySelector('.blue-button');
let resetButton = document.querySelector('.reset-button');
let allButtons = document.querySelector('.all-buttons')

// function playerScore(event){
//   event.preventDefault();
//   switch (event.target.nodeName === "BUTTON"){
//    case event.target.innerText === "+1 Player One":
//         console.log("+1 Player One");
//         playerOneScore.innerText = 0;
//         if (playerOneScore.innerText <= scoreRange.value){
//             console.log(playerOneScore.innerText)
//            playerOneScore.innerText ++ 1;
//         }
//     break;
//     case event.target.innerText === "+1 Player Two":
//         console.log("+1 Player Two");
//         break;
//     case event.target.innerText === "Reset":
//         console.log("Reset");
//         break;


//     }
 
// }
 let firstTotal = 0;
 let sndTotal = 0;

function firstPlayerScore(event){
 event.preventDefault();
if(event.target.innerText === "+1 Player One"){
   if (firstTotal < scoreRange.value){
    if(scoreRange.value > 0){
        scoreRange.value = scoreRange.value
    }
    playerOneScore.style.color = 'black';
    firstTotal += 1
   playerOneScore.innerHTML = firstTotal;
   if( firstTotal == scoreRange.value && firstTotal > sndTotal){
    console.log("You win")
    playerOneScore.style.color = 'green';
    playerTwoScore.style.color = 'red';

   }
   }
   
  }else{
  console.log(event.target)
  }

}


function sndPlayerScore(event){
    event.preventDefault();
   if(event.target.innerText === "+1 Player Two"){
      if (sndTotal < scoreRange.value){
        if(scoreRange.value > 0){
            scoreRange.value = scoreRange.value
        }
       playerTwoScore.style.color = 'black';
       sndTotal += 1
       playerTwoScore.innerHTML = sndTotal;
       if( sndTotal == scoreRange.value && sndTotal > firstTotal){
        console.log("You win")
        playerTwoScore.style.color = 'green';        
        playerOneScore.style.color = 'red';
       }
      }
      
     }else{
     console.log(event.target)
     }
   
   }

function resetScores(event){
    event.preventDefault();
    firstTotal = 0;
    sndTotal = 0;
    playerOneScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;
    playerOneScore.style.color = 'black';
    playerTwoScore.style.color = 'black';

}


resetButton.addEventListener('click', resetScores);

greenButton.addEventListener('click', firstPlayerScore);

blueButton.addEventListener('click', sndPlayerScore);







