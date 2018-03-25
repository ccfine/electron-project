const { dialog } = require("electron");

dialog.showErrorBox("this is title", "this is content");

dialog.showMessageBox({
  type: "info",
  title: "this is title",
  message: "this is content",
  buttons: ["ok", "cancel"]
}, (index) => {
  if (index === 0) {
    console.log("点的是第一个按钮");
  } else if (index === 1) {
    console.log("点的是第二个按钮");
  }
});

dialog.showOpenDialog({
  properties: ["openFile", "openDirectory"]
}, (pathname) => {
  console.log(pathname);
});

dialog.showSaveDialog({
  title: "保存文件",
  filters: [
    { name: "未命名", extensions: ["js"] }
  ]
}, (filename => {
  console.log(filename)
}));