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
  let myName = prompt("Enter Your Name");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Hope you also love the Cat, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Hope you also love the Cat, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};