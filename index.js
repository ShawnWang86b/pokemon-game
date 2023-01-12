const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "./img/town.png";

const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

image.onload = () => {
  c.drawImage(image, -500, -1000);
  c.drawImage(
    playerImage,
    //crop from position X
    0,
    //crop from position Y
    0,
    //crop width in X
    playerImage.width / 4,
    //crop height in Y
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );
};
