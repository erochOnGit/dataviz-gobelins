let canvasUSNorth = document.querySelector('.map__canvas.map__canvas__USNorth'),
    ctxUSNorth = canvasUSNorth.getContext('2d')

let canvasUSSouth = document.querySelector('.map__canvas.map__canvas__USSouth'),
    ctxUSSouth = canvasUSSouth.getContext('2d')

let canvasEurope = document.querySelector('.map__canvas.map__canvas__europe'),
    ctxEurope = canvasEurope.getContext('2d')

let canvasRussia = document.querySelector('.map__canvas.map__canvas__russia'),
    ctxRussia = canvasRussia.getContext('2d')

let canvasAustralia = document.querySelector('.map__canvas.map__canvas__australia'),
    ctxAustralia = canvasAustralia.getContext('2d')


//canvas.width = window.innerWidth
//canvas.height = window.innerHeight


function spider (canvas, ctx, numberOfPoints = 50, ratioOfPoints = 20, R = 0, G = 0, B = 0, opacity = 1) {

    let positionsOfPoints = []

    const width = canvas.width
    const height = canvas.height

    const time = new Date()

    let i = 0
    for (i = 0; i < numberOfPoints; ++i) {

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
                'color': `rgba(${R}, ${G}, ${B}, ${opacity})`,
                "opacity": opacity
            }
        })
    }

    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let = 0
        for (i = 0; i < positionsOfPoints.length; ++i) {


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
            positionsOfPoints[i].firstPoint.x += positionsOfPoints[i].firstPoint.goX * 0.3
            positionsOfPoints[i].firstPoint.y += positionsOfPoints[i].firstPoint.goY * 0.3
            positionsOfPoints[i].firstPoint.opacity += 0.05
        
            // Trace point
            ctx.beginPath();
            ctx.arc(positionsOfPoints[i].firstPoint.x, positionsOfPoints[i].firstPoint.y, 2.5, 0, 2*Math.PI);
            ctx.fillStyle = positionsOfPoints[i].firstPoint.color;
            ctx.fill();
            ctx.closePath();

            let pN = positionsOfPoints[i]

            let o = 0
            for (o = 0; o < positionsOfPoints.length; ++o) {

                // Stop for not retrace line
                
                if (pN.firstPoint.goX == positionsOfPoints[o].firstPoint.x && pN.firstPoint.goX >= positionsOfPoints[o].firstPoint.x) {
                    break
                }

                const radius = ratioOfPoints;

                
                if (
                    pN.firstPoint.x >= (positionsOfPoints[o].firstPoint.x - radius) && pN.firstPoint.x <= (positionsOfPoints[o].firstPoint.x + radius)
                    &&
                    pN.firstPoint.y >= (positionsOfPoints[o].firstPoint.y - radius) && pN.firstPoint.y <= (positionsOfPoints[o].firstPoint.y + radius)
                ) {

                    //if (positionsOfPoints[o].firstPoint.alreadyConnected || positionsOfPoints[o].lastPoint.alreadyConnected) { break }
                    ctx.beginPath();
                    ctx.moveTo(pN.firstPoint.x, pN.firstPoint.y);
                    ctx.strokeStyle = positionsOfPoints[i].firstPoint.color
                    ctx.lineWidth = 0.3;
                    ctx.lineTo(positionsOfPoints[o].firstPoint.x, positionsOfPoints[o].firstPoint.y);
                    ctx.stroke();
                    ctx.closePath();

                }
            }
        }


        window.requestAnimationFrame(draw)
    }

    draw()

    // points[i].x += (points[i].targetX - points[i].x) * points[i].easing

}


/*
document.querySelector('#map').addEventListener('mousemove', (e) => {

    const width = window.innerWidth
    const height = window.innerHeight
    const radiusSelection = 50

    console.log('test')

    for (let i = 0; i < positionsOfPoints.length; i++) {

        

        if (
            positionsOfPoints[i].firstPoint.x > (e.offsetX-radiusSelection) && positionsOfPoints[i].firstPoint.x < (e.offsetX+radiusSelection)
            &&
            positionsOfPoints[i].firstPoint.y > (e.offsetY-radiusSelection) && positionsOfPoints[i].firstPoint.y < (e.offsetY+radiusSelection)
        ) {
            //
            // if (positionsOfPoints[i].firstPoint.goX == 1) {
            //     positionsOfPoints[i].firstPoint.x -= 20
            //     positionsOfPoints[i].firstPoint.y -= 20
            // } else {
            //     positionsOfPoints[i].firstPoint.x += 20
            //     positionsOfPoints[i].firstPoint.y += 20
            // }
            //

            // positionsOfPoints[i].firstPoint.color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`
            positionsOfPoints[i].firstPoint.color = `rgba(255, 255, 255, 0.1)`
            
        }

    }

})*/
/*
pointsUSNorth = spider(canvasUSNorth, 50, 100, 0, 0, 0, 1)
pointsUSSouth = spider(canvasUSSouth, 50, 50, 0, 0, 0, 1)
pointsEurope = spider(canvasEurope, 40, 50, 0, 0, 0, 1)
pointsRussia = spider(canvasRussia, 200, 150, 0, 0, 0, 1)
pointsAutralia = spider(canvasAutralia, 100, 50, 0, 0, 0, 1)
*/

// console.log(getCo2TotalPerYear(2014))

//let data = getCo2TotalPerYear(2014)

let spiderVAR = []

function getGraph() {

    let datasTotal = getCo2TotalPerYear(store.year),
        percentTotal = map(datasTotal, 0, 13035119495533, 0, 130)

    let datasRussia = getCo2PerCountryPerYear("Russian Federation", store.year),
        percentRussia = map(datasRussia, 0, 1119495533, 0, 130)

    spider(canvasUSNorth, ctxUSNorth, 80, percentTotal, 29, 29, 37, 1)
    spider(canvasUSSouth, ctxUSSouth, 30, percentTotal, 29, 29, 37, 1)
    spider(canvasEurope, ctxEurope, 30, percentTotal, 29, 29, 37, 1)
    spider(canvasRussia, ctxRussia, 90, percentRussia, 29, 29, 37, 1)
    spider(canvasAustralia, ctxAustralia, 20, percentTotal, 29, 29, 37, 1)  

}

window.addEventListener('wheel', getGraph)


let li = document.querySelectorAll('.container__timeline__ul__li')
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', getGraph)
}

getGraph()