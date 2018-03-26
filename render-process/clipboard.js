const { clipboard, nativeImage } = require("electron");

clipboard.writeText("1");
clipboard.writeText("2");
console.log(clipboard.readText());

let img = nativeImage.createFromPath("../main-process/1.png");
clipboard.writeImage(img);
const imgDataURL = clipboard.readImage().toDataURL();

const image = new Image();
image.src = imgDataURL;

document.body.appendChild(image);