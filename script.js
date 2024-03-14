let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let messageRef = document.getElementById("message-ref");

let isUsernameValid = () => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return usernameRegex.test(usernameRef.value);
};

/* Password should be atleast 8 character long. Should contain atleast 1 number, 1 special character, 1 lower case and 1 upper case. */
let isPasswordValid = () => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/gm;  
  return passwordRegex.test(passwordRef.value);
};

usernameRef.addEventListener("input", () => {
if (!isUsernameValid()) {
    messageRef.style.visibility = "hidden";
    usernameRef.style.cssText = "border-color: #fe2e2e; background-color: #ffc2c2";
} else {
    usernameRef.style.cssText = "border-color: #34bd34; background-color: #c2ffc2";
}
});

passwordRef.addEventListener("input", () => {
    if (!isPasswordValid()) {
        messageRef.style.visibility = "hidden";
        passwordRef.style.cssText = "border-color: 3fe2e2e; background-color: #ffc2c2;";
    } else {
        passwordRef.style.cssText = "border-color: #34bdbd; background-color; c2ffc2";
    }
});

submitBtn.addEventListener("mouseover", () => {
//If either password or username is invalid then
if(!isUsernameValid() || !isPasswordValid()) {
    //get the current position of submit button
    let containerRect = document.querySelector(".container").getBoundingClientRect();
    let submitRect = submitBtn.getBoundingClientRect();
    let offset = submitRect.left - containerRect.left;
    console.log(offset);

    //if the button is on the left hand side...move it th the right hand side
    if (offset<= 100) {
        submitBtn.style.transform = "translateX(16.25em)";
    }
    else {
        submitBtn.style.transform = "translateX(0)";
    }
}
});
submitBtn.addEventListener("click", () => {
    messageRef.style.visibility = "visibility";
});