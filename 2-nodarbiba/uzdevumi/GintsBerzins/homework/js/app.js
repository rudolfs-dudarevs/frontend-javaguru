const actionBtn1 = document.getElementById("action-btn1");
const actionEl1 = document.getElementById("action-el1");

const actionBtn2 = document.getElementById("action-btn2");
const actionEl2 = document.getElementById("action-el2");

const actionBtn3 = document.getElementById("action-btn3");
const actionEl3 = document.getElementById("action-el3");

const changeStyle1 = () => {
    actionEl1.style.width = "100%";
    actionEl1.style.height = "100%";
};

const changeStyle2 = () => {
    actionEl2.style.width = "100%";
    actionEl2.style.height = "0";
    actionEl2.style.backgroundColor = "black";
    actionEl2.style.color = "black";
    actionEl2.style.fontWeight = "bold";
    actionEl2.style.fontSize = "2.5em";
    actionEl2.style.textTransform = "uppercase";
    actionEl2.style.letterSpacing = "5px";

    // let name = "Element";
    // let upper = name.toUpperCase()
};

const changeStyle3 = () => {
    actionEl3.style.right = "0";
    actionEl3.style.width = "100%";
    actionEl3.style.background = "white";
    actionEl3.style.color = "#1d3557";
}

function reset1() {
    actionEl1.style.width = "";
    actionEl1.style.height = "";
}

function reset2() {
    actionEl2.style.width = "";
    actionEl2.style.height = "";
    actionEl2.style.backgroundColor = "";
    actionEl2.style.color = "";
    actionEl2.style.fontWeight = "";
    actionEl2.style.fontSize = "";
    actionEl2.style.textTransform = "";
    actionEl2.style.letterSpacing = "";
}

function reset3() {
    actionEl3.style.right = "";
    actionEl3.style.width = "";
    actionEl3.style.background = "";
    actionEl3.style.color = "";
}