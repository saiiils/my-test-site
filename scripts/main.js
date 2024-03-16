const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "media/goatee-toilet.jpg") {
        myImage.setAttribute("src", "media/goatee-close.jpg");
    } else {
        myImage.setAttribute("src", "media/goatee-toilet.jpg");
    }
};

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// function setUserName() {
//     const myName = prompt("Enter your name.");
//     if (!myName) {
//         setUserName();
//     } else {
//         localStorage.setItem("name", myName);
//         myHeading.textContent = `welcome to da bowl, ${myName}`;
//     }
// }

// if (!localStorage.getItem("name")) {
//     setUserName();
// } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `welcome to da bowl, ${storedName}`;
// }

// myButton.onclick = () => {
//     setUserName();
// }