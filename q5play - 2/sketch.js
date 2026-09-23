new Q5("global");

let sizeX = window.innerWidth - 150;
let sizeY = window.innerHeight - 150;
const playerDiameter = 75;
const randomSign = Math.random() < 0.5 ? -1 : 1;
const bumperDiameter = (playerDiameter * 4) / 3;
let maxSpeed = 60;
let minSpeed = 0;

let lastXVelocity;
let lastYVelocity;

let player;
let bumper;

let lastLoggedMessage;

let isPaused = false;

let targets;

function reset(sprite) {
  sprite.velocity.x = random(-20, 20);
  sprite.velocity.y = random(-20, 20);
  sprite.position.x = random(0 + playerDiameter, sizeX - playerDiameter);
  sprite.position.y = random(0 + playerDiameter, sizeY - playerDiameter);

  console.log('"' + sprite.name.toUpperCase() + '" RESET');
}

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
  player.name = "player";

  bumper = new Sprite(
    player.x + randomSign * (playerDiameter + bumperDiameter),
    player.y + randomSign * (playerDiameter + bumperDiameter),
    bumperDiameter,
  );
  bumper.physics = "static";
  bumper.bounciness = 1.2;
  bumper.friction = 0;
  bumper.name = "bumper"

  targets = new Group();
  targets.add(bumper);
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
      console.log("Overspeed: ", player.speed);
    }
    player.speed = maxSpeed;
  }

  if (player.collides(targets)) {
    setTimeout(() => {
      console.log("Collided: ", player.speed);
      lastLoggedMessage = player.speed;
    }, 500);
  }

  if (isPaused != true) {
    if (kb.pressed("right")) {
      maxSpeed += 5;
      console.log("Max: ", maxSpeed, "\nSpeed: ", player.speed);
    }

    if (kb.pressed("left")) {
      maxSpeed -= 5;
      console.log("Max: ", maxSpeed, "\nSpeed: ", player.speed);
    }

    if (kb.pressed("up") && player.speed <= maxSpeed - 4) {
      player.speed += 4;
      console.log(player.speed);
    } else if (maxSpeed - 4 < player.speed && player.speed < maxSpeed) {
      player.speed = maxSpeed;
      console.log("Max: ", maxSpeed, "\nSpeed: ", player.speed);
    }

    if (kb.pressed("down") && player.speed >= minSpeed + 4) {
      player.speed -= 4;
      console.log(player.speed);
    } else if (minSpeed < player.speed && player.speed < minSpeed + 4) {
      player.speed = minSpeed;
      console.log("Max: ", maxSpeed, "\nSpeed: ", player.speed);
    }

    if (kb.pressing("l")) {
      if (kb.pressed("p")) {
        reset(player);
      }

      if (kb.pressed("b")) {
        reset(bumper);
      }
    }
  }

  if (kb.pressed("space")) {
    if (isPaused === false) {
      lastXVelocity = player.velocity.x;
      player.velocity.x = 0;

      lastYVelocity = player.velocity.y;
      player.velocity.y = 0;

      isPaused = true;

      console.log("Paused");
    } else if (isPaused === true) {
      player.velocity.x = lastXVelocity;

      player.velocity.y = lastYVelocity;

      isPaused = false;

      console.log("Unpaused");
    }
  }
}
