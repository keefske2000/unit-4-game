


$(document).ready(function(){
 
var random=Math.floor(Math.random()*101+19)

$("#number").text(random);

var one= Math.floor(Math.random()*11+1)
  var two= Math.floor(Math.random()*11+1)
  var three= Math.floor(Math.random()*11+1)
  var four= Math.floor(Math.random()*11+1)

  var userTotal= 0;
  var Wins= 0;
var Losses= 0;


$("#Wins").text(Wins);
$("#Losses").text(Losses);



function reset(){
      random=Math.floor(Math.random()*101+19);
      comnsole.log(random)
      $("#number").text(random);
      
      $("#score").text(userTotal)

}

function winner(){
  alert("You won!");
    Wins++; 
    $("#Wins").text(Wins);
    reset();
  }
 
  function loser(){
  alert ("You lose!");
    Losses++;
    $("#Losses").text(Losses);
    reset()
  }

  $("#one").on ('click', function(){
    userTotal = userTotal + one;
    console.log("userScore= " + userTotal);
    $("#score").text(userTotal); 
         
        if (userTotal == random){
          winner();
        }
        else if ( userTotal > random){
          loser();
        }   
  })  

  $("#two").on ('click', function(){
    userTotal = userTotal + two;
    console.log("userScore= " + userTotal);
    $("#score").text(userTotal); 
        if (userTotal == random){
          winner();
        }
        else if ( userTotal > random){
          loser();
        } 
  })  
  $("#three").on ('click', function(){
    userTotal = userTotal + three;
    console.log("userScore= " + userTotal);
    $("#score").text(userTotal);

          if (userTotal == random){
          winner();
        }
        else if ( userTotal > random){
          loser();
        } 
  })  
  $("#four").on ('click', function(){
    userTotal = userTotal + four;
    console.log("userScore= " + userTotal);
    $("#score").text(userTotal); 
      
          if (userTotal == random){
          winner();
        }
        else if ( userTotal > random){
          loser();
        }

        
  });  







})


