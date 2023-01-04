const actionEl = document.getElementById("action-el");

const changeStyle = () => {
    actionEl.style.backgroundColor = "orange";
    actionEl.style.width = "270px";
    actionEl.style.height = "120px";
}

const pulseEl = document.getElementById("pulse-el");

const pulseStyle = () => {
    pulseEl.style.backgroundColor = "pink"
}

var speed=1000;
setInterval(function(){
    var ele=document.getElementById('blink');
    ele.style.visibility=(ele.style.visibility=='hidden'?'visible':'hidden');
},speed);

