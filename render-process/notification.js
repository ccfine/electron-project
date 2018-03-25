const path = require("path");

const option = {
  title: "this is title",
  body: "this is body",
  icon: path.join(__dirname, "../main-process/1.png")
}

const notification = new window.Notification(option.title, option);
notification.onclick = () => {
  console.log("notification");
};