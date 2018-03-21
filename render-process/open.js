const BrowserWindow = require("electron").remote.BrowserWindow;
const path = require("path");
const url = require("url");

const btn = document.getElementById("btn");
let win;
btn.addEventListener("click", () => {
  win = new BrowserWindow({
    width: 200,
    height: 200,
    frame: true
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, "../model.html"),
    protocol: "file:",
    slashes: true
  }));
  win.on("close", () => {
    win = null;
  });
});