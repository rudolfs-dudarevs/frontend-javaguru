const actionBtn = document.getElementById("action-btn");
const actionEl = document.getElementById("action-el");
const actionEl2 = document.getElementById("action-el2");
const actionEl3 = document.getElementById("action-el3");

const changeStyle = () => {
    actionEl.style.backgroundColor = "green";
    actionEl.style.border = "thick dotted red";
    actionEl.style.textShadow = "4px 4px red ";
    actionEl.style.textAlign = "center";
    actionEl.style.boxShadow = "10px 20px 30px darkblue";

};

const changeStyle2 = () => {
    actionEl2.style.backgroundColor = "green";
    actionEl2.style.border = "thick dotted red";
    actionEl2.style.textShadow = "4px 4px red ";
    actionEl2.style.textAlign = "center";
    actionEl2.style.position = "relative"
    actionEl2.style.width = "200px"
    actionEl2.style.animation = "mynewmove 2s 4";
    actionEl2.style.animationDirection = "alternate"

};

const changeStyle3 = () => {
    actionEl3.style.backgroundColor = "green";
    actionEl3.style.borderLeft = "thick groove red";
    
    actionEl3.style.borderBottom= "20px ridge blue ";
    actionEl3.style.borderTop = "5px double yellow"
    actionEl3.style.borderRight = "10px dashed black"

    actionEl3.style.position = "relative";
    actionEl3.style.right = "-100px";
    actionEl3.style.bottom = "-20%";
    actionEl3.style.overflow = "auto";
    actionEl3.style.resize = "both";
};