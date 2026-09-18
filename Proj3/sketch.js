new Q5("global");

let sizeX = window.innerWidth - 150
let sizeY = window.innerHeight - 150
const playerDiameter = 75;

let player;

let lastLoggedMessage

function setup() {
  createCanvas(sizeX, sizeY);

  // Create your permanent sprites here
  player = new Sprite(random(0 + playerDiameter, sizeX - playerDiameter), random(0 + playerDiameter, sizeY - playerDiameter), playerDiameter);
  player.color = "lime";
  player.velocity.x = 4;
}

function draw() {
  background(90);

    if (player.x >= sizeX + playerDiameter) {
        
        player.x = 0 - playerDiameter / 2

        if (lastLoggedMessage != 'working') {
            console.log('working')
            lastLoggedMessage = 'working'
        }
    }

    if (player.y >= sizeY + playerDiameter) {

        player.y = 0 - playerDiameter / 2

        if (lastLoggedMessage != 'working') {
            console.log('working')
            lastLoggedMessage = 'working'
        }
    }

    if (player.x <= 0 - playerDiameter) {

        player.x = sizeX + playerDiameter / 2

        if (lastLoggedMessage != 'working') {
            console.log('working')
            lastLoggedMessage = 'working'
        }
    }

    if (player.y <= 0 - playerDiameter) {

        player.y = sizeY + playerDiameter / 2

        if (lastLoggedMessage != 'working') {
            console.log('working')
            lastLoggedMessage = 'working'
        }
    }

  // Add real-time movement and game loops here
}