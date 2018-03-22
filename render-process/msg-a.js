const { ipcRenderer } = require("electron");

const msg = document.getElementById("msg");
msg.addEventListener("click", () => {
    let msg = ipcRenderer.sendSync("msg-a");
    console.log(msg);

<<<<<<< HEAD
    ipcRenderer.send("msg-a-1", { name: "fine" });
    ipcRenderer.on("msg-a-1-back", (e, arg) =>{
=======
    ipcRenderer.send("msg-a-1", { name: "fine"});
    ipcRenderer.on("msg-a-1-back", (e, arg) => {
>>>>>>> 10b32926b8a1017d434cc9d28185829f4d205e5f
        console.log(arg.name);
    });
});