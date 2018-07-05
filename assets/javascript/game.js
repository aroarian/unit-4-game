$(document).ready(function() {
  
  var random = Math.floor(Math.random() * (120 - 19 + 1) + 19);
  $(".dispRand").text(random);
  var wins = 0;
  $(".dispWins").text(wins);
  var loss = 0;
  $(".dispLoss").text(loss);
  var red = Math.floor(Math.random() * 12) + 1;
  var green = Math.floor(Math.random() * 12) + 1;
  var blue = Math.floor(Math.random() * 12) + 1;
  var yellow = Math.floor(Math.random() * 12) + 1;
  var userGuess = 0;
  $(".dispGuess").html(userGuess);
  
 
  

  function resetGame() {
    userGuess = 0;
    $(".dispGuess").html(userGuess);
    red = Math.floor(Math.random() * 12) + 1;
    green = Math.floor(Math.random() * 12) + 1;
    blue = Math.floor(Math.random() * 12) + 1;
    yellow = Math.floor(Math.random() * 12) + 1;
    random = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    $(".dispRand").text(random);

  };

    $("#red").on("click", function() {
      userGuess = userGuess + red;
      $(".dispGuess").text(userGuess);

      if (userGuess == random) {
        alert("You Win!");
        wins++;
        $(".dispWins").text(wins);
        resetGame();
        

      } else if (userGuess > random) {
        alert("You Lose!");
        loss++;
        $(".dispLoss").text(loss);
        resetGame();
        
      }
      console.log("userguess " + userGuess);
    })

    $("#green").on("click", function() {
      userGuess = userGuess + green;
      $(".dispGuess").text(userGuess);

      if (userGuess == random) {
        alert("You Win!");
        wins++;
        $(".dispWins").text(wins);
        resetGame();
        

      } else if (userGuess > random) {
        alert("You Lose!");
        loss++;
        $(".dispLoss").text(loss);
        resetGame();
        
      }
      console.log("userguess " + userGuess);
    })

    $("#blue").on("click", function() {
      userGuess = userGuess + blue;
      $(".dispGuess").text(userGuess);

      if (userGuess == random) {
        alert("You Win!");
        wins++;
        $(".dispWins").text(wins);
        resetGame();
        

      } else if (userGuess > random) {
        alert("You Lose!");
        loss++;
        $(".dispLoss").text(loss);
        resetGame();
        
      }
      console.log("userguess " + userGuess);
    })

    $("#yellow").on("click", function() {
      userGuess = userGuess + yellow;
      $(".dispGuess").text(userGuess);

      if (userGuess == random) {
        alert("You Win!");
        wins++;
        $(".dispWins").text(wins);
        resetGame();
        

      } else if (userGuess > random) {
        alert("You Lose!");
        loss++;
        $(".dispLoss").text(loss);
        resetGame();
        
      }
      console.log("userguess " + userGuess);
    })

    
    console.log("random " + random);
    console.log(red);
  

 
});
