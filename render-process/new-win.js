const { ipcRenderer } = require("electron");
const { BrowserWindow } = require("electron").remote;
const path = require("path");
const url = require("url");

const newWin = document.getElementById("new");
let win;
newWin.onclick = () => {
  const winId = BrowserWindow.getFocusedWindow().id;
  win = new BrowserWindow({
    width: 400,
    height: 400,
    show: true
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, "../new-win.html"),
    protocol: "file:",
    slashes: true
  }));

  win.webContents.openDevTools();
  win.webContents.on("did-finish-load", (e) => {
    win.webContents.send("msg", winId, { name: "chen", text: "hello" })
  });

  ipcRenderer.on("back", (e, winId, msg) => {
    console.log(msg);
  });
};