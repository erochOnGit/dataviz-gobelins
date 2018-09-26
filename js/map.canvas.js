let mapCanvas = document.querySelector('#map__canvas')
let ctx = mapCanvas.getContext('2d')

mapCanvas.width = window.innerWidth
mapCanvas.height = window.innerHeight



var img = new Image();
img.src = 'img/map-points.svg';
img.onload = function() {
    ctx.drawImage(img, 0, 0);
}

var pixel = ctx.getImageData(50, 50, 1, 1);
console.log(pixel)