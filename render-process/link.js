const { shell } = require("electron");

const links = document.getElementsByTagName("a");

Array.from(links).forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const url = item.getAttribute("href");
    shell.openExternal(url);
  }); 
});