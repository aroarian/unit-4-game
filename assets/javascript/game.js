var wins = 0;
var loss = 0;
var random = 0;

function resetGame() {
    random = 0;
    userGuess = 0;
    $(".dispGuess").html(userGuess);
  startGame();
}

function startGame() {
    random = 0;
  var userGuess = 0;
  $(".dispGuess").text(userGuess);
  $(".dispWins").text(wins);
  $(".dispLoss").text(loss);

  random = Math.floor(Math.random() * (120 - 19 + 1) + 19);

  $(".dispRand").text(random);

  var valueRed = Math.floor(Math.random() * 12) + 1;
  $(".red").on("click", function() {
    userGuess = userGuess + valueRed;
    $(".dispGuess").html(userGuess);
    if (userGuess == random) {
      alert("You Win!");
      win++;
      resetGame()
    }

    if (userGuess > random) {
      alert("You Lose!");
      userGuess = 0;
      $(".dispGuess").html(userGuess);
      loss++;
      resetGame()
    }
    console.log(valueRed);
    // console.log(userGuess);
  });

  var valueBlue = Math.floor(Math.random() * 12) + 1;
  $(".blue").on("click", function() {
    userGuess = userGuess + valueBlue;
    $(".dispGuess").html(userGuess);
    if (userGuess == random) {
      alert("You Win!");
      win++;
      resetGame()
    }

    if (userGuess > random) {
      alert("You Lose!");
      userGuess = 0;
      $(".dispGuess").html(userGuess);
      loss++;
      resetGame()
    }
    console.log(valueBlue);
    
  });

  var valueGreen = Math.floor(Math.random() * 12) + 1;
  $(".green").on("click", function() {
    userGuess = userGuess + valueGreen;
    $(".dispGuess").html(userGuess);
    if (userGuess == random) {
      alert("You Win!");
      win++;
      resetGame()
    }

    if (userGuess > random) {
      alert("You Lose!");
      userGuess = 0;
      $(".dispGuess").html(userGuess);
       loss++;
       resetGame()
    }
    console.log(valueGreen);
    // console.log(userGuess);
  });

  var valueYellow = Math.floor(Math.random() * 12) + 1;
  $(".yellow").on("click", function() {
    userGuess = userGuess + valueYellow;
    $(".dispGuess").html(userGuess);
    if (userGuess == random) {
      alert("You Win!");
      win++;
      resetGame()
    }

    if (userGuess > random) {
      alert("You Lose!");
      userGuess = 0;
      $(".dispGuess").html(userGuess);
      loss++;
      resetGame()
    }
    console.log(valueYellow);
    
  });
  console.log("userguess " + userGuess);
  console.log("random " + random);
}

startGame();
