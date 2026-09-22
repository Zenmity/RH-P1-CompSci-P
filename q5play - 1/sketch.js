new Q5("global");

let player;
let floor;
let wall1;
let wall2;
let wall3;
let spinner;
let spinner2;
let bumper;
let bumper2;
let player2;
let player3;

let lastLoggedMessage = null;

let ySize = window.innerHeight - 150
let xSize = window.innerWidth - 150

function setup() {
  createCanvas(xSize, ySize);


  player =              new Sprite(xSize/2, ySize/2, 50);
  player.collider =     'dynamic';
  player.mass =         0.9;
  player.color =        "lime";
  player.rotationLock = true;
  player.layer =        1000;
  player.speed =        random(1,4);
  player.bounciness =   1.1;
  player.friction =     0;


  player2 =              new Sprite(xSize/2, ySize/2, 50);
  player2.collider =     'dynamic';
  player2.mass =         0.9;
  player2.color =        "lime";
  player2.rotationLock = true;
  player2.layer =        1000;
  player2.speed =        random(1,4);
  player2.bounciness =   1.1;
  player2.friction =     0;


  player3 =              new Sprite(xSize/2, ySize/2, 50);
  player3.collider =     'dynamic';
  player3.mass =         0.9;
  player3.color =        "lime";
  player3.rotationLock = true;
  player3.layer =        1000;
  player3.speed =        random(1,4);
  player3.bounciness =   1.1;
  player3.friction =     0;
  
  bumper =              new Sprite(xSize/4,ySize/4,40)
  bumper.collider =     'static';
  bumper.rotationLock = true;
  bumper.layer =        500;
  bumper.friction =     0;

  bumper2 =              new Sprite(xSize*3/4, ySize*3/4, 40)
  bumper2.collider =     'static';
  bumper2.rotationLock = true;
  bumper2.layer =        500;
  bumper2.friction =     0;

  spinner =             new Sprite(xSize/4, ySize*3/4, 200, 20)
  spinner.physics =     'kinematic'
  spinner.rotationLock =false
  spinner.rotationSpeed=4;

  spinner =             new Sprite(xSize*3/4, ySize/4, 200, 20)
  spinner.physics =     'kinematic'
  spinner.rotationLock =false
  spinner.rotationSpeed=4

  // floor = new Sprite(400,800,800,20,'static')

  floor = new Sprite(xSize/2,ySize,xSize,20,'static')
  floor.bounciness = 1;
  floor.color = "pink";

  wall1 = new Sprite(0,ySize/2,20,ySize,'static')
  floor.bounciness = 1;
  floor.color = "blue";

  wall2 = new Sprite(xSize,ySize/2,20,ySize,'static')x``
  floor.bounciness = 1;
  floor.color = "blue";

  wall3 = new Sprite(xSize/2,0,xSize,20,'static')
  floor.bounciness = 1;
  floor.color = "blue";
}

function draw() {
  background(90);
  // gravityScale()
  // player.speed.y = 0.3;
  world.gravity.y = 10
  
  player.physics = "dynamic";

  if (kb.pressing('left'))  player.vel.x += -4;
  if (kb.pressing('right')) player.vel.x += 4;
  if (kb.pressing('up'))    player.vel.y += -4;
  if (kb.pressing('down'))  player.vel.y += 4;
  if (kb.pressing("space") && player.collider != 'static') {
    player.vel.y = 0
    player.vel.x = 0
  }

  if (player.speed > 40) {
    player.speed = 40;
    if (lastLoggedMessage != 'player1 overspeed') {
      console.log('player1 overspeed');
      lastLoggedMessage = "player1 overspeed";
    }
  }

  if (player2.speed > 40) {
    player2.speed = 40;
    if (lastLoggedMessage != 'player2 overspeed') {
      console.log('player2 overspeed');
      lastLoggedMessage = "player2 overspeed";
    }
  }

  if (player3.speed > 40) {
    player3.speed = 40;
    if (lastLoggedMessage != 'player3 overspeed') {
      console.log('player3 overspeed');
      lastLoggedMessage = "player3 overspeed";
    }
  }

  
  if (player.collides(allSprites) === true) {
    setTimeout(() => {
      console.log(player.speed);
      lastLoggedMessage = player.speed;
    }, 500)
    }
  
  // if (player.collides(bumper)) {
  //   player.vel.y = 0
  //   player.vel.x = 0
  //   // player.gravity.y = 0
  // }

  
// ySize = window.innerHeight - 150
// xSize = window.innerWidth - 150

  // if (kb.release('space')) {
  //   player.collider = 'dynamic'
  // }

  // Add real-time movement and game loops here
}