new Q5("global");

let sizeX = window.innerWidth - 150;
let sizeY = window.innerHeight - 150;
const playerDiameter = 75;
const randomSign = Math.random() < 0.5 ? -1 : 1;
const bumperDiameter = (playerDiameter * 4) / 3;
let maxSpeed = 60;
let minSpeed = 0;

let lastXvelocity;
let lastYVelocity;

let player;
let bumper;

let lastLoggedMessage;

function setup() {
  createCanvas(sizeX, sizeY);

  // Create your permanent sprites here
  player = new Sprite(
    random(0 + playerDiameter, sizeX - playerDiameter),
    random(0 + playerDiameter, sizeY - playerDiameter),
    playerDiameter,
  );
  player.color = "lime";
  player.velocity.x = random(-20, 20);
  player.velocity.y = random(-20, 20);
  player.bounciness = 1.2;
  player.friction = 0;

  bumper = new Sprite(
    player.x + randomSign * (playerDiameter + bumperDiameter),
    player.y + randomSign * (playerDiameter + bumperDiameter),
    bumperDiameter,
  );
  bumper.physics = "static";
  bumper.bounciness = 1.2;
  bumper.friction = 0;
}

function draw() {
  background(90);

  if (player.x >= sizeX + playerDiameter) {
    player.x = 0 - playerDiameter / 2;

    // if (lastLoggedMessage != "workingR") {
    //   console.log("workingR");
    //   lastLoggedMessage = "workingR";
    // }
  }

  if (player.y >= sizeY + playerDiameter) {
    player.y = 0 - playerDiameter / 2;

    // if (lastLoggedMessage != "workingB") {
    //   console.log("workingB");
    //   lastLoggedMessage = "workingB";
    // }
  }

  if (player.x <= 0 - playerDiameter) {
    player.x = sizeX + playerDiameter / 2;

    // if (lastLoggedMessage != "workingL") {
    //   console.log("workingL");
    //   lastLoggedMessage = "workingL";
    // }
  }

  if (player.y <= 0 - playerDiameter) {
    player.y = sizeY + playerDiameter / 2;

    // if (lastLoggedMessage != "workingT") {
    //   console.log("workingT");
    //   lastLoggedMessage = "workingT";
    // }
  }

  if (player.speed > maxSpeed) {
    if (player.speed > maxSpeed) {
      console.log(player.speed, " - overspeed");
    }
    player.speed = maxSpeed;
  }

  if (player.collides(allSprites) === true) {
    setTimeout(() => {
      console.log(player.speed);
      lastLoggedMessage = player.speed;
    }, 500);
  }
  if (pauseActive != true) {
    if (kb.pressed("right")) {
      maxSpeed += 5;
      console.log("Max: ", maxSpeed, "\nMin: ", player.speed);
    }

    if (kb.pressed("left")) {
      maxSpeed -= 5;
      console.log("Max: ", maxSpeed, "\nMin: ", player.speed);
    }

    if (kb.pressed("up") && player.speed <= maxSpeed - 4) {
      player.speed += 4;
      console.log(player.speed);
    } else if (maxSpeed - 4 < player.speed && player.speed < maxSpeed) {
      player.speed = maxSpeed;
      console.log(player.speed, " - maxspeed");
    }

    if (kb.pressed("down") && player.speed >= minSpeed + 4) {
      player.speed -= 4;
      console.log(player.speed);
    } else if (minSpeed < player.speed && player.speed < minSpeed + 4) {
      player.speed = minSpeed;
      console.log(player.speed, " - minspeed");
    }
  }
  if (kb.pressed("space") && player.speed >= 0 && isPaused == false) {
    lastXVelocity = player.velocity.x
    player.velocity.x = 0

    lastYVelocity = player.velocity.y
    player.velocity.y = 0

    //NEXT+++ isPaused DEFININTION
  // Add real-time movement and game loops here
}
