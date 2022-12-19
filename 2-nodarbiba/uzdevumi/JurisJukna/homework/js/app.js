const actionBtn1 = document.getElementById("btn1");
const actionEl1 = document.getElementById("El1");

const actionBtn2 = document.getElementById("btn2");
const actionEl2 = document.getElementById("El2");

const actionBtn3 = document.getElementById("btn3");
const actionEl3 = document.getElementById("El3");
const title = document.getElementById("h1");

const changeStyle1 = () => {
    actionEl1.style.borderBottom = "80px solid #17db05";
    actionBtn1.style.backgroundColor = "#17db05e3"
    actionBtn1.style.color = "blue"
}

const changeStyle2 = () => {
    actionEl2.style.borderBottom = "80px solid #17db05cb";
    actionBtn2.style.backgroundColor = "#17db05b9"
    actionBtn2.style.color = "red"
}

const changeStyle3 = () => {
    actionEl3.style.borderBottom = "80px solid #17db0596";
    actionBtn3.style.backgroundColor = "#5a2d02"
    title.style.fontFamily = "Rubik Gemstones"
}