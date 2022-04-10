let myImage = 
document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/logo-example-bear.jpg") {
        myImage.setAttribute("src", "images/logo-example.jpg")
    } else {
        myImage.setAttribute("src", "images/logo-example-bear.jpg");
}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    } else {

    localStorage.setItem("name", myName);
    myHeading.textContent = "Hi " + myName + "! My name is Jacob, and I am making a test site.";
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hi " + storedName + "! My name is Jacob, and I am making a test site.";
}

myButton.onclick = function() {
    setUserName();
}