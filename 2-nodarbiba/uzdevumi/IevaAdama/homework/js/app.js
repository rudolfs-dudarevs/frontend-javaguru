const actionFirstEl = document.getElementById("select-first-el");
const actionFirstBtn = document.getElementById("select-btn");

const actionSecondEl = document.getElementById("select-second-el");
const actionSecondBtn = document.getElementById("select-second-btn");

const actionThirdEl = document.getElementById("select-third-el");
const actionThirdBtn = document.getElementById("select-third-btn");

const changeStyleBlue = () => {
    actionFirstEl.style.width = "200px";
    actionFirstEl.style.height = "200px";
    actionFirstEl.style.lineHeight = "200px";
    actionFirstEl.style.transition = "all 2s linear";
    actionFirstEl.style.backgroundColor = "green";
}
const changeStyleRed = () => {
    actionSecondEl.style.width = "300px";
    actionSecondEl.style.transition = "all 2s linear";
    actionSecondEl.style.paddingTop = "15px";
}
const changeStyleYellow = () => {
    actionThirdEl.style.width = "150px";
    actionThirdEl.style.height = "150px";
    actionThirdEl.style.fontSize = "24px";
    actionThirdEl.style.fontStyle = "italic";
    actionThirdEl.style.paddingTop = "30px";
    actionThirdEl.style.marginBottom = "25px";
    actionThirdEl.style.transform = "rotateZ(360deg)";
}
