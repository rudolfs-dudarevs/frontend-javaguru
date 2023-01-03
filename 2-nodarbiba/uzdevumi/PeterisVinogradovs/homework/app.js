
const actionBtn1 = document.getElementById("action-btn-1");
const actionEl1 = document.getElementById("action-el-1");
const actionBtn11 = document.getElementById("action-btn-1-1");

const differentStyle = () => {

    actionEl1.innerText = "Bottom/Right"
    actionEl1.style.backgroundColor = "#00896F";
    actionEl1.style.position = "absolute";
    actionEl1.style.left = "193px";
    actionEl1.style.top = "193px";
}

const resetStyle = () => {
    actionEl1.removeAttribute('style');
    actionEl1.innerText = "Top/Left"
}

const actionBtn2 = document.getElementById("action-btn-2");
const actionEl2 = document.getElementById("action-el-2");
const actionBtn21 = document.getElementById("action-btn-2-1");

const differentStyle2 = () => {

    actionEl2.style.backgroundColor = "rgb(64, 191, 128)"
    actionEl2.style.boxShadow = "10px 20px 10px rgb(38, 115, 77)";
    actionEl2.style.fontSize = "25px";
    actionEl2.style.fontWeight = "bold";
}

const resetStyle2 = () => {
    actionEl2.removeAttribute('style');
}

const actionBtn3 = document.getElementById("action-btn-3");
const actionEl3 = document.getElementById("action-el-3");
const actionBtn31 = document.getElementById("action-btn-3-1");

const differentStyle3 = () => {
    actionEl3.style.width = "100%";
    actionEl3.style.height = "100%";
    actionEl3.style.backgroundImage = "url(https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg)";
    actionEl3.style.backgroundRepeat ="no-repeat";
    actionEl3.style.backgroundPosition = "center";
    actionEl3.style.backgroundSize = "cover";
    actionEl3.style.fontWeight = "bold";
    actionEl3.style.fontSize = "30px";
}

const resetStyle3 = () => {
    actionEl3.removeAttribute('style');
}