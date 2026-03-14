function generateJSON(){

const frameId = document.getElementById("frameId").value;
const title = document.getElementById("title").value;
const type = document.getElementById("type").value;

const photoX = Number(document.getElementById("photoX").value);
const photoY = Number(document.getElementById("photoY").value);
const photoSize = Number(document.getElementById("photoSize").value);

const nameX = Number(document.getElementById("nameX").value);
const nameY = Number(document.getElementById("nameY").value);
const fontSize = Number(document.getElementById("fontSize").value);

const json = {
  id: frameId,
  type: type,
  title: title,
  image: `assets/frames/${frameId}.png`,
  photo: {
    x: photoX,
    y: photoY,
    size: photoSize
  },
  name: {
    x: nameX,
    y: nameY,
    fontSize: fontSize,
    color: "#ffffff"
  }
};

document.getElementById("output").value =
JSON.stringify(json, null, 2);

}

function logout(){

localStorage.removeItem("admin");
window.location.href = "login.html";

}
