const { ipcRenderer } = require("electron");

const msg = document.getElementById("msg");
msg.addEventListener("click", () => {
    let msg = ipcRenderer.sendSync("msg-a");
    console.log(msg);

    ipcRenderer.send("msg-a-1", { name: "fine" });
    ipcRenderer.on("msg-a-1-back", (e, arg) =>{
        console.log(arg.name);
    });
});