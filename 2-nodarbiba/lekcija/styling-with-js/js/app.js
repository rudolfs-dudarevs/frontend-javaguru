const actionBtn = document.getElementById("action-btn");
const actionEl = document.getElementById("action-el");

const changeStyle = () => {
    // actionEl.style.backgroundColor = "black";
    //// No animation like this...
    actionEl.style.position = "absolute";
    actionEl.style.right = "0";
    actionEl.style.bottom = "0";
    actionEl.style.width = "200px";
    actionEl.style.height = "200px";
    
};