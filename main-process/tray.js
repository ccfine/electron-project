const { Menu, Tray } = require("electron");
const path = require("path");

let appIcon;
app = new Tray(path.join(__dirname, "./1.png"));

let menu = Menu.buildFromTemplate([
    {
        label: "close",
        click: () => {
            appIcon.destroy();
        }
    }
]);

appIcon.setToolTip("什么玩意这是");
appIcon.setContextMenu(menu);