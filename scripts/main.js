let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Minimal Cat.png") {
    myImage.setAttribute("src", "images/CAT.png");
  } else {
    myImage.setAttribute("src", "images/Minimal Cat.png");
  }
};
