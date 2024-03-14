let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Minimal Cat.png") {
    myImage.setAttribute("src", "images/CAT.png");
  } else {
    myImage.setAttribute("src", "images/Minimal Cat.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字");
  localStorage.setItem("name", myName);
  myHeading.textContent = "想爱哈基米了，" + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "想爱哈基米了，" + storedName;
}

myButton.onclick = function () {
  setUserName();
};