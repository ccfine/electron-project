const { ipcRenderer } = require("electron");
const { BrowserWindow } = require("electron").remote;

window.onload = () => {
  ipcRenderer.on("msg", (e, winId, msg) => {
    let win = BrowserWindow.fromId(winId);
    console.log(msg);

    win.webContents.send("back", winId, { name: "fine", text: "hello too" });
  }); 
};