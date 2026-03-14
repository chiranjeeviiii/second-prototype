async function generatePoster(photoFile, frame, name){

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.clearRect(0,0,canvas.width,canvas.height);

const frameImg = new Image();
frameImg.src = frame.image;

await new Promise(resolve => frameImg.onload = resolve);

ctx.drawImage(frameImg,0,0,1080,1080);

const photo = new Image();
photo.src = URL.createObjectURL(photoFile);

await new Promise(resolve => photo.onload = resolve);

const {x,y,size} = frame.photo;

ctx.save();

ctx.beginPath();
ctx.arc(x + size/2, y + size/2, size/2, 0, Math.PI * 2);
ctx.clip();

ctx.drawImage(photo, x, y, size, size);

ctx.restore();

ctx.fillStyle = frame.name.color;
ctx.font = `${frame.name.fontSize}px sans-serif`;
ctx.textAlign = "center";

ctx.fillText(name, frame.name.x, frame.name.y);

}
