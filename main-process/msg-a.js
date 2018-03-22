const { ipcMain } = require("electron");

ipcMain.on("msg-a", (e) => {
  e.returnValue = "hello hello";
});

ipcMain.on("msg-a-1" , (e, arg) => {
  console.log(arg.name);
  e.sender.send("msg-a-1-back" , { name: "chen" });
});