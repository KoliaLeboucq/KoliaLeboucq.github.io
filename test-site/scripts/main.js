const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/MyImage.JPEG") {
    myImage.setAttribute("src", "images/fromage.JPEG");
  } else {
    myImage.setAttribute("src", "images/MyImage.JPEG");
  }
};

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };