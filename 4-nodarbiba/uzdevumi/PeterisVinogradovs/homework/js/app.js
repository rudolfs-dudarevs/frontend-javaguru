// Izveidot funkcijas appendListElements() kodu, lai izveidotu HTML elementus un pievienotu tos #list-container.
// Rezultatam jāizskatās kā example.jpg redzamajam sarkastam.

// 1. Aizpilkdīts cvList masīvu ar 4 brīvi izvēlētu personu/tēlu CV objektiem (nav jābūt reāliem piemēriem).
//    CV objekti satur īpašības: 
//       -- firstName (string)
//       -- lastName (string)
//       -- phoneNr (number)
//       -- email (string)
//       -- workExperience (array of strings with 4 values)
//       -- languages (object with 3 properties as objects - lv, rus, eng - , each property has 2 properties - name, level)
//    CV objekta struktūrai un īpašībām ir jābūt gluži kā Objects patstāvīgā darba uzdevumā izveidotajam CV objektam.
// 3. Iekš funckcijas appendListElements deklerācijas ar for vai forEach ciklu iterēt caur cvList masīvu.
// 4. Katrā masīva iterācijā izveidot string mainīgo, kas satur kā tekstu attēlojamo HTML:
//    - div elementus ar klasi "list-item"
//    - katrs div elements satur <h2 class="title">Name: ...</h2> elementu, kur ... aizvietot ar attiecīgās iterācijas objekta firstName un lastName īpašību apvienojumu.
//    - katrs div elements satur <p class="text">PhoneNr.: ...</> elementu, kur ... aizvietot ar attiecīgās iterācijas objekta phoneNr īpašību.
//    - katrs div elements satur <p class="text">Email: ...</> elementu, kur ... aizvietot ar attiecīgās iterācijas objekta email īpašību.
//    - katrs div elements satur <ul></ul> elementu, jeb sarakstu ar workExperience masīva vērtībām:
//        <p class="subtitle">Work experience</p>
//        <ul>
//            <li class="text">${elements.workExperiences[0]}</li>
//            <li class="text">${elements.workExperiences[1]}</li>
//            ...
//        </ul>           
//     - katrs div elements satur <ul></ul> elementu, jeb sarakstu ar languages masīva objektu vērtībām:
//        <p class="subtitle">Languages</p>
//        <ul>
//            <li class="text">${elements.workExperiences.lv.name} - ${elements.workExperiences.lv.level}</li>
//            ...
//        </ul>
// 5. Katrā iterācijā izveidoto string mainīgo pievienot #list-container elementa innerHTML īpašībai.
// 6. funkciju appendListElements piesaistīts pogas #generate-list-btn klikšķim/
// 7. Brīvi noformēt katru .list-item elementu ar CSS iekš list-container.css faila.
//    Ieteicams izveidojot katra .list-item child elementus jeb tur iekšā esošos <h2>, <p>, <ul> un <li> elementus - piešķirt šiem elementiem class atribūtus, kad tie tiek izveidoti.

const listContainer = document.getElementById("list-container");
const generateListBtn = document.getElementById("generate-list-btn");

let janisKalnins = {
    firstName: "Jānis",
    lastName: "Kalniņš",
    phoneNr: 27185652,
    email: "janis@hello.lv",
    workExperience: [
        "SIA Statoil",
        "SIA SEB banka",
        "SIA IF apdrošināšana",
        "SIA Citadele"
    ],
    languages: {
        lv: {
            name: "latvian",
            level: "native"
        },
        rus: {
            name: "rusian",
            level: "bad"
        },
        eng: {
            name: "english",
            level: "good"
        }, 
}}

let oskarsVilnis = {
    firstName: "Oskars",
    lastName: "Vilnis",
    phoneNr: 98671263,
    email: "oskars@morning.lv",
    workExperience: [
        "SIA Latvijas Pasts",
        "SIA Omniva",
        "SIA Skultes kulturas nams",
        "SIA LIDO"
    ],
    languages: {
        lv: {
            name: "latvian",
            level: "native"
        },
        rus: {
            name: "rusian",
            level: "basic"
        },
        eng: {
            name: "english",
            level: "basic"
        }, 
}}

let lasmaSkudra = {
    firstName: "Lāsma",
    lastName: "Skudra",
    phoneNr: 63826129,
    email: "lasma@mail.lv",
    workExperience: [
        "SIA Frizētava `Skaistums`",
        "SIA Olaines slimnīca",
        "SIA Salons `Zemgale`",
        "SIA Jelgavas maiznieks"
    ],
    languages: {
        lv: {
            name: "latvian",
            level: "native"
        },
        rus: {
            name: "rusian",
            level: "native"
        },
        eng: {
            name: "english",
            level: "good"
        }, 
}}

let zaneZirne = {
    firstName: "Zane",
    lastName: "Zirne",
    phoneNr: 63534120,
    email: "zane@pro.lv",
    workExperience: [
        "SIA Apranga",
        "SIA Caffe zvaigzne",
        "SIA SwedBanka",
        "SIA Capital Finance"
    ],
    languages: {
        lv: {
            name: "latvian",
            level: "native"
        },
        rus: {
            name: "rusian",
            level: "Basic"
        },
        eng: {
            name: "english",
            level: "good"
        }, 
}}

const cvList = [janisKalnins, oskarsVilnis, lasmaSkudra, zaneZirne];


const appendListElements = () => {
    listContainer.innerHTML = "";

    cvList.forEach((item) => {
        const listEl =`
        <div class="list-item">
        <h2 class="title">Name: ${item.firstName} ${item.lastName}</h2>
        <p class="text">PhoneNr.: ${item.phoneNr}</>
        <p class="text">Email: ${item.email}</>
        <p class="subtitle">Work experience:</p>
        <ul>
           <li class="text">${item.workExperience[0]}</li>
            <li class="text">${item.workExperience[1]}</li>
            <li class="text">${item.workExperience[2]}</li>
            <li class="text">${item.workExperience[3]}</li>            
        </ul>
        <p class="subtitle">Languages</p>
       <ul>
            <li class="text">${janisKalnins.languages.lv.name} - ${janisKalnins.languages.lv.level}</li>
            <li class="text">${janisKalnins.languages.rus.name} - ${janisKalnins.languages.rus.level}</li>
            <li class="text">${janisKalnins.languages.eng.name} - ${janisKalnins.languages.eng.level}</li>
        </ul>
        </div>        
        `

        listContainer.innerHTML += listEl;
    })
}
generateListBtn.addEventListener("click", appendListElements);

