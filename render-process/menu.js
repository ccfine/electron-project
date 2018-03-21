const ipc = require("electron").ipcRenderer;

document.oncontextmenu = () => {
    ipc.send("show-context-menu");
}