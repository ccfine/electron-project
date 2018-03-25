const { app, globalShortcut, dialog } = require("electron");

app.on("ready", () => {
  globalShortcut.register("ctrl+i", () => {
    dialog.showMessageBox({
      type: "info",
      title: "title",
      message: "message",
      detail: "detail",
      buttons: ["ok"]
    });
  });
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});