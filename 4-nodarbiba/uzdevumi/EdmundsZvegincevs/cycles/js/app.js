// Izveidot funkcijas appendListElements() kodu, lai izveidotu HTML elementus un pievienotu tos #list-container.
// Rezultatam jāizskatās kā example.jpg redzamajam sarkastam.

// 1. papildināt boxList masīvu.
// 2. listContainer elementam pievienot klasi "list-container-show".
// 3. Iekš funckcijas appendListElements deklerācijas ar for vai forEach ciklu iterēt caur boxList masīvu.
// 4. Katrā masīva iterācijā izveidot string mainīgo, kas satur kā tekstu attēlojamo HTML:
//    - div elementus ar klasi "list-item"
//    - attiecīgajam div elementam ar style attribūtu piešķirt CSS īpašību background-color,
//      kas ir vienāda ar vērtību no backgroundColors masīva pēc boxList un backgroundColors masīvu indexa.
// 5. Katrā iterācijā izveidoto string mainīgo pievienot #list-container elementa innerHTML īpašībai.
// 6. funkciju appendListElements piesaistīts pogas #generate-list-btn klikšķim/


const listContainer = document.getElementById("list-container");
const generateListBtn = document.getElementById("generate-list-btn");

const backgroundColors = ["blueviolet", "darkorange", "crimson", "darkmagenta", "deeppink", "plum"];
const boxList = ["Box 1", "Box 2", "Box 3", "Box4", "Box5", "Box6"];

const appendListElements = () => {
    listContainer.innerHTML = "";
    listContainer.classList.add('list-container-show');

    boxList.forEach((element, index) => {
        const listEl = `
            <div class="list-item" style="background-color: ${backgroundColors[index]};">
                ${element}
            </div>
        `;
        listContainer.innerHTML += listEl;
    });
}

generateListBtn.addEventListener("click", appendListElements);
