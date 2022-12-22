const actionBtn = document.getElementById("action-btn");
const actionEl = document.getElementById("action-el");

const actionBtn2 = document.getElementById("second-action-btn");
const actionEls = document.getElementById("blink");

const actionBtn3 = document.getElementById("third-action-btn");
const actionElch = document.getElementById("color-ch");

const changeStyle = () => {
    actionEl.style.backgroundColor = "black";
    actionEl.style.width = "200px";
    actionEl.style.height = "200px";
    actionEls.style.backgroundColor = "green";
    actionEls.style.visibility = "visible";
    actionEls.style.animationName = "blink";
    actionEls.style.animationDuration = "2s";
    actionEls.style.animationIterationCount = "infinite";
    actionEls.style.animationDelay = "1s";
    //nesaprotu, ko sabojāju, jo vinibrīd mirkšķināšanu biju panākusi un tad pazuda un vairs nevaru saprast, kur bēda?
    actionElch.style.font = "60px";
    actionElch.style.color = "darkorange"
    actionEls.style.animationDelay = "3s";
   // actionElch.style.display = "none"
};

 //vai ir iespēja, sadalīt, ka krāsa nomainās uzreiz, bet pēc 3s teksts pazūd? Šeit mēģinājums, bet ne visai veiksmīgs
setTimeout = () => {
    actionBtn3.style.visibility = "hidden"
},3

//Diemžēl neatradu veidu, kā nodrošināt, ka katra poga strādā atsevišķi





