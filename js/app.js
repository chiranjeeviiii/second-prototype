let frames = [];

async function loadFrames(){

const res = await fetch("data/frames.json");
const data = await res.json();

frames = data.frames;

const select = document.getElementById("achievementSelect");

frames.forEach(frame=>{
const option = document.createElement("option");
option.value = frame.id;
option.textContent = frame.title;
select.appendChild(option);
});

}

document.getElementById("generateBtn").onclick = async () => {

const photo = document.getElementById("photoInput").files[0];
const name = document.getElementById("nameInput").value;
const frameId = document.getElementById("achievementSelect").value;

const frame = frames.find(f => f.id === frameId);

generatePoster(photo, frame, name);

};

document.getElementById("downloadBtn").onclick = () => {

const canvas = document.getElementById("canvas");

const link = document.createElement("a");

link.download = "poster.png";
link.href = canvas.toDataURL();

link.click();

};

loadFrames();
