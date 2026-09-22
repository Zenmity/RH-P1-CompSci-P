function setup(){
    createCanvas(600,600)
}

let t = 0

function draw(){
    background("#645555")

    fill("#0e0e0e")
    circle(300,300,225 + 12*Math.sin(t))

    fill("#8f499f")
    circle(300,300,200 + 13*Math.sin(t))
    
    fill("rgb(211, 89, 207)")
    circle(300,300,175 + 14*Math.sin(t))
    
    fill("#b14949")
    circle(300,300,150 + 15*Math.sin(t))
    
    fill("#4d3b9c")
    circle(300,300,125 + 16*Math.sin(t))
    
    fill("#4c8f6e")
    circle(300,300,100 + 17*Math.sin(t))
    
    fill("#2c1e73")
    circle(300,300,75 + 18*Math.sin(t))
    
    fill("#3a619b")
    circle(300,300,50 + 19*Math.sin(t))
    
    fill("#e7a2a2")
    circle(300,300,25 + 20*Math.sin(t))
    t = t + 0.05
}