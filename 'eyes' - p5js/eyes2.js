// === MY P5.JS CREATIVE DRAWING ===
function setup() {
createCanvas(1000, 800);
}

function tree(treeX,treeY) {

noStroke()

// Trunk
fill(161, 127, 41)
rect(treeX-20,treeY,40,260)

// Leaves
fill(6, 175, 0)
circle(treeX,treeY,240,240)



}

function treeLine(treeX,treeY) {
tree(treeX+0,treeY+420)
tree(treeX+160,treeY+420)
tree(treeX+320,treeY+420)
tree(treeX+480,treeY+420)
tree(treeX+640,treeY+420)
tree(treeX+800,treeY+420)
tree(treeX+960,treeY+420)
}


function draw() {

background(0,0,0);

noStroke()

//sky
fill(159, 227, 237,-mouseY+500)
rect(0,0,1000,800)

// Sun
fill(240, 209, 0)
// circle(150,mouseY,200)
circle(150,mouseY,100+(-mouseY+200))

// Grass
fill(6, 153, 0)
rect(0, 600, 1000, 200);

// Trees
treeLine(0,0)

}
// Sky/Background color (Red, Green, Blue)
// TODO 1: Draw background scenery (ground, stars, sun, hills, etc.)
// TODO 2: Draw the main subject body / structure
// TODO 3: Draw head, face, windows, or central features
// TODO 4: Add limbs, antennae, wheels, details, or accents