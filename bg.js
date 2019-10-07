const body = document.querySelector('body');
const IMG_NUM = 3;

function paintImg(imgNum) {
    const image = new Image();
    image.src = `images/${imgNum}.jpg`;
    image.classList.add('bgImg');
    body.prepend(image);
}

function genRandom() {
    const num = Math.floor(Math.random() * IMG_NUM);
    return num;
}

function init() {
    const randomNum = genRandom();
    paintImg(randomNum);
}

init();