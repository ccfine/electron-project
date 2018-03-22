const { ipcMain } = require("electron");

ipcMain.on("msg-a", (e) => {
  e.returnValue = "hello hello";
});

<<<<<<< HEAD
ipcMain.on("msg-a-1" , (e, arg) => {
  console.log(arg.name);
  e.sender.send("msg-a-1-back" , { name: "chen" });
=======
ipcMain.on("msg-a-1", (e, arg) => {
  console.log(arg.name);
  e.sender.send("msg-a-1-back", { name: "chen"});
>>>>>>> 10b32926b8a1017d434cc9d28185829f4d205e5f
});