var wins = 0;
var loss = 0;
var random = 0;
var crystalNum= 0;



function resetGame() {
  random = 0;
  var userGuess = 0;
  $(".dispGuess").html(userGuess);
  startGame();
}

function startGame() {
  
  random = 0;
  userGuess = 0;
  var red = Math.floor(Math.random() * 12) + 1;
  var green = Math.floor(Math.random() * 12) + 1;
  var blue = Math.floor(Math.random() * 12) + 1;
  var yellow = Math.floor(Math.random() * 12) + 1;
  $(".dispGuess").html(userGuess);
  $(".dispWins").text(wins);
  $(".dispLoss").text(loss);

 
  random = Math.floor(Math.random() * (120 - 19 + 1) + 19);
  parseInt(random);

  $(".dispRand").html(random);

  $("#red").on("click", function() {
    userGuess = userGuess + red;
    parseInt(userGuess);
    $(".dispGuess").html(userGuess);
    // $(".test").html(userGuess);
    console.log($(".test"));
    console.log("userguess " + userGuess);
  })

  $("#green").on("click", function() {
    userGuess = userGuess + green;
    parseInt(userGuess);
    $(".dispGuess").html(userGuess);
    console.log(green);
    console.log("userguess " + userGuess);
  })

  $("#blue").on("click", function() {
    userGuess = userGuess + blue;
    parseInt(userGuess);
    $(".dispGuess").html(userGuess);
    console.log(blue);
    console.log("userguess " + userGuess);
  })

  $("#yellow").on("click", function() {
    userGuess = userGuess + yellow;
    parseInt(userGuess);
    $(".dispGuess").html(userGuess);
    console.log(yellow);
    console.log("userguess " + userGuess);
  })
    if (userGuess == random) {
      alert("You Win!");
      win++;
      resetGame();
    }

    
    if (userGuess > random) {
      alert("You Lose!");
      userGuess = 0;
      $(".dispGuess").html(userGuess);
      loss++;
      resetGame();
    }
    
  console.log("userguess " + userGuess);
  console.log("random " + random);
}

startGame();
