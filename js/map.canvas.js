let canvas = document.querySelector('#map__canvas')
let ctx = canvas.getContext('2d')

//canvas.width = window.innerWidth
//canvas.height = window.innerHeight

let animationIsStarted = false
let positionsOfPoints = []

function spider () {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const width = canvas.width/2
    const height = canvas.height/2

    const time = new Date()

    if (!animationIsStarted) {

        for (let i = 0; i < 10; i++) {

            // Create random position on canvas
            let firstPointX = Math.floor(Math.random() * width),
                firstPointY = Math.floor(Math.random() * height)

            // Update array width coordinates
            positionsOfPoints.push({
                'firstPoint': {
                    'x': firstPointX,
                    'y': firstPointY,
                    'goX': Math.random() < 0.5 ? -1 : 1,
                    'goY': Math.random() < 0.5 ? -1 : 1,
                    'color': "rgba(0, 0, 0, 1)",
                    "opacity": 1
                },
                'lastPoint': {
                    'x': Math.floor(Math.random() * (width-50)),
                    'y': Math.floor(Math.random() * (height-50)),
                    'goX': 1,
                    'goY': 1,
                    'alreadyConnected': false
                }
            })
        }

        animationIsStarted = true

    } else {

        for (let i = 0; i < positionsOfPoints.length; i++) {


            if (
                (positionsOfPoints[i].firstPoint.y + positionsOfPoints[i].firstPoint.goY) > (height-100) || (positionsOfPoints[i].firstPoint.y + positionsOfPoints[i].firstPoint.goY) < 100 
            ) {

                positionsOfPoints[i].firstPoint.goY = -positionsOfPoints[i].firstPoint.goY
                
            }

            if (
                (positionsOfPoints[i].firstPoint.x + positionsOfPoints[i].firstPoint.goX) > (width-100) || (positionsOfPoints[i].firstPoint.x + positionsOfPoints[i].firstPoint.goX) < 100
            ) {

                positionsOfPoints[i].firstPoint.goX = -positionsOfPoints[i].firstPoint.goX
                
            }
            
            // Move particles
            positionsOfPoints[i].firstPoint.x += positionsOfPoints[i].firstPoint.goX * 0.5
            positionsOfPoints[i].firstPoint.y += positionsOfPoints[i].firstPoint.goY * 0.5
        
            // Trace point
            ctx.beginPath();
            ctx.arc(positionsOfPoints[i].firstPoint.x, positionsOfPoints[i].firstPoint.y, 3, 0, 2*Math.PI);
            ctx.fillStyle = positionsOfPoints[i].firstPoint.color;
            ctx.fill();

            let pN = positionsOfPoints[i]

            for (let o = 0; o < positionsOfPoints.length; o++) {

                // Stop for not retrace line
                
                if (pN.firstPoint.goX == positionsOfPoints[o].firstPoint.x && pN.firstPoint.goX >= positionsOfPoints[o].firstPoint.x) {
                    break
                }

                const radius = 100;

                
                if (
                    pN.firstPoint.x >= (positionsOfPoints[o].firstPoint.x - radius) && pN.firstPoint.x <= (positionsOfPoints[o].firstPoint.x + radius)
                    &&
                    pN.firstPoint.y >= (positionsOfPoints[o].firstPoint.y - radius) && pN.firstPoint.y <= (positionsOfPoints[o].firstPoint.y + radius)
                ) {

                    //if (positionsOfPoints[o].firstPoint.alreadyConnected || positionsOfPoints[o].lastPoint.alreadyConnected) { break }
                    
                    ctx.moveTo(pN.firstPoint.x, pN.firstPoint.y);
                    ctx.strokeStyle = positionsOfPoints[i].firstPoint.color
                    ctx.lineWidth = 0.1;
                    ctx.lineTo(positionsOfPoints[o].firstPoint.x, positionsOfPoints[o].firstPoint.y);
                    ctx.stroke();

                }

                /*
                if (
                    pN.lastPoint.x >= (Math.floor(positionsOfPoints[o].lastPoint.x - radius)) && pN.lastPoint.x <= (Math.floor(positionsOfPoints[o].lastPoint.x + radius))
                    &&
                    pN.lastPoint.y >= (Math.floor(positionsOfPoints[o].lastPoint.y - radius)) && pN.lastPoint.y <= (Math.floor(positionsOfPoints[o].lastPoint.y + radius))
                ) {
                    
                    ctx.moveTo(pN.lastPoint.x, pN.lastPoint.y)
                    ctx.strokeStyle = "rgba(255, 0, 0, .6)"
                    ctx.lineTo(positionsOfPoints[o].lastPoint.x, positionsOfPoints[o].lastPoint.y)
                    ctx.stroke()           
                    
                } 

                
                if (
                    pN.firstPoint.x >= (Math.floor(positionsOfPoints[o].lastPoint.x - radius)) && pN.firstPoint.x <= (Math.floor(positionsOfPoints[o].lastPoint.x + radius))
                    &&
                    pN.firstPoint.y >= (Math.floor(positionsOfPoints[o].lastPoint.y - radius)) && pN.firstPoint.y <= (Math.floor(positionsOfPoints[o].lastPoint.y + radius))
                ) {

                    ctx.moveTo(pN.firstPoint.x, pN.firstPoint.y)
                    ctx.strokeStyle = "rgba(255, 0, 0, .7)"
                    ctx.lineTo(positionsOfPoints[o].lastPoint.x, positionsOfPoints[o].lastPoint.y)
                    ctx.stroke()
                    
                } 
                
                if (
                    pN.lastPoint.x >= (Math.floor(positionsOfPoints[o].firstPoint.x - radius)) && pN.lastPoint.x <= (Math.floor(positionsOfPoints[o].firstPoint.x + radius))
                    &&
                    pN.lastPoint.y >= (Math.floor(positionsOfPoints[o].firstPoint.y - radius)) && pN.lastPoint.y <= (Math.floor(positionsOfPoints[o].firstPoint.y + radius))
                ) {

                    ctx.moveTo(pN.lastPoint.x, pN.lastPoint.y);
                    ctx.strokeStyle = "rgba(255, 0, 0, .8)";
                    ctx.lineTo(positionsOfPoints[o].firstPoint.x, positionsOfPoints[o].firstPoint.y);
                    ctx.stroke();

                }
                */

            }
            
        }


    }

    // points[i].x += (points[i].targetX - points[i].x) * points[i].easing


    window.requestAnimationFrame(spider);
}

spider()

canvas.addEventListener('mousemove', (e) => {

    const width = window.innerWidth
    const height = window.innerHeight
    const radiusSelection = 50

    for (let i = 0; i < positionsOfPoints.length; i++) {

        

        if (
            positionsOfPoints[i].firstPoint.x > (e.offsetX-radiusSelection) && positionsOfPoints[i].firstPoint.x < (e.offsetX+radiusSelection)
            &&
            positionsOfPoints[i].firstPoint.y > (e.offsetY-radiusSelection) && positionsOfPoints[i].firstPoint.y < (e.offsetY+radiusSelection)
        ) {
            /*
            if (positionsOfPoints[i].firstPoint.goX == 1) {
                positionsOfPoints[i].firstPoint.x -= 20
                positionsOfPoints[i].firstPoint.y -= 20
            } else {
                positionsOfPoints[i].firstPoint.x += 20
                positionsOfPoints[i].firstPoint.y += 20
            }
            */

            // positionsOfPoints[i].firstPoint.color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`
            positionsOfPoints[i].firstPoint.color = `rgba(0, 0, 0, 0.1)`
            
        }

    }

})