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

const cvList = [
    {
        firstName: "Ieva",
        lastName: "Ādama",
        email: "adama.ieva02@gmail.com",
        phoneNr: "27491131",
        workExperience:[
            "IK Aleksale",
            "ZS Zīļudārzs",
            "SIA Kiddicare",
            "SIA Ādere"
        ],
        languages: {
            lv: {
                name: "Latviešu",
                level: "Native",
            },
            rus: {
                name: "Krievu",
                level: "basic",
            },
            eng: {
                name: "Angļu",
                level: "good",
            },
        }
    },
    {
        firstName: "Santa",
        lastName: "Dzene",
        email: "sanata.dzene@gmail.com",
        phoneNr: "24855113",
        workExperience:[
            "IK Saac",
            "SIA Liepkalni",
            "SIA forte",
            "SIA Red"
        ],
        languages: {
            lv: {
                name: "Latviešu",
                level: "Native",
            },
            rus: {
                name: "Krievu",
                level: "good",
            },
            eng: {
                name: "Angļu",
                level: "gbasic",
            },
        }
    },
    {
        firstName: "Jānis",
        lastName: "Kalniņš",
        email: "janis.kalnins@gmail.com",
        phoneNr: "29766854",
        workExperience:[
            "SIA Robots",
            "SIA Delfi",
            "SIA Group AB",
            "SIA Resistence"
        ],
        languages: {
            lv: {
                name: "Latviešu",
                level: "Native",
            },
            rus: {
                name: "Krievu",
                level: "Exelent",
            },
            eng: {
                name: "Angļu",
                level: "Exelent",
            },
        }
    },
    {
        firstName: "Raivis",
        lastName: "Stiprais",
        email: "raivis.stiprais@gmail.com",
        phoneNr: "27899765",
        workExperience:[
            "IK Zole",
            "SIA Visums",
            "SIA Apversums",
            "SIA Radion"
        ],
        languages: {
            lv: {
                name: "Latviešu",
                level: "Native",
            },
            rus: {
                name: "Krievu",
                level: "good",
            },
            eng: {
                name: "Angļu",
                level: "good",
            },
        }
    }
];

const appendListElements = () => {
    listContainer.innerHTML = "";
    listContainer.classList.add('list-container-show');

    cvList.forEach((data) => {
             const cvCard = `
             <div class="list-item">
                <h2 class="item"> ${data.firstName} ${data.lastName}</h2>
                <p class="text">Phone Nr.: ${data.phoneNr} </p>
                <p class="text">Email: ${data.email} </>
                <p class="subtitle">Work experience</p>
                <ul>
                   <li class="text">${data.workExperience[0]}</li>
                   <li class="text">${data.workExperience[1]}</li>
                   <li class="text">${data.workExperience[2]}</li>
                   <li class="text">${data.workExperience[3]}</li>
                </ul>
                <p class="subtitle">Languages</p>
                <ul>
                   <li class="text">${data.languages.lv.name} - ${data.languages.lv.level}</li>
                   <li class="text">${data.languages.rus.name} - ${data.languages.rus.level}</li>
                   <li class="text">${data.languages.eng.name} - ${data.languages.eng.level}</li>
                </ul>
             </div>
         `;
         listContainer.innerHTML += cvCard;
    });
}
generateListBtn.addEventListener("click", appendListElements);
