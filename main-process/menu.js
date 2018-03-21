const { Menu, app, ipcMain, BrowserWindow } = require("electron");

let template = [
    {
      label: "menu1",
      submenu: [
        {
          label: "submenu1"
        },
        {
          type: "separator"
        },
        {
          label: "submenu2"
        }
      ]
    },
    {
      label: "menu2",
      submenu: [
        {
          label: "submenu3",
          click: () => {
            console.log("i am the submenu3");
          }
        }
      ]
    }
];

let menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

if (process.platform === "darwin") {
  app.dock.setMenu(menu);
}

ipcMain.on("show-context-menu", (e) => {
  const win = BrowserWindow.fromWebContents(e.sender);
  menu.popup(win);
});