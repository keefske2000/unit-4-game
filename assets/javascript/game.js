
// document.getElementById("number").innerHTML = 0;

$(document).ready(function(){
  // var random = ;
// $("#randomNumber").click(function(){
//   getRandomNumber(100)
// })
var random=Math.floor(Math.random()*101+19)

$("#number").text(random);

var crystal= Math.floor(Math.random()*11+1)

var Wins= 0;
var Losses= 0;
var userTotal= 0;

$("#Wins").text(wins);
$("#losses").text(losses);

// function getRandomNumber() {
//   var x = Math.floor((Math.random() * 101) + 19);
//  document.getElementById("number").innerHTML = x;
//   eval()
// }

function reset(){
      random=Math.floor(Math.random()*101+19);
      comnsole.log(random)
      crystal= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $("#score").text(userTotal)

}

function yay(){
  alert("You won!");
    wins++; 
    $("#Wins").text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function loser(){
  alert ("You lose!");
    losses++;
    $("#Losses").text(losses);
    reset()
  }

  $("#one").on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $("#score").text(userTotal); 
          //sets win/lose conditions
        if (userTotal == random){
          yay();
        }
        else if ( userTotal > random){
          loser();
        }   
  })  



// function eval(){
//   //if score is what i want 
//   if (x === random) {
//       alert("You Win !");
//     }
    
//     else if (x >= random) {
//       alert("You Lose!");
//     }
//   userWin()
  
// }


// $(document).ready(function(){
//   // var random = ;
// $("#randomNumber").click(function(){
//   getRandomNumber(100)
// })


// $("#number").text(random);
$("#crystals").click(function(){
  getRandomNumber(y)
 
})
// 




})


