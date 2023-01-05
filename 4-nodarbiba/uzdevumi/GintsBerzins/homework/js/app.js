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
        firstName: "Dita",
        lastName: "Dzene",
        phoneNr: 1234567,
        email: "dita.dzene@gmail.com",
        workExperiences: [
            "SIA Neotech",
            "SIA TerGravit",
            "SIA Jumis",
            "SIA Accenture"
        ],
        languages: {
            lv: {
                name: "Latviešu",
                level: "Native"
            },
            rus: {
                name: "Krievu",
                level: "Fluent"
            },
            eng: {
                name: "Angļu",
                level: "Intermediate"
            }
        }
    },
    {
        firstName: "Laura",
        lastName: "Zemene",
        phoneNr: 1234567,
        email: "laura.zemene@gmail.com",
        workExperiences: [
            "SIA Stenders",
            "SIA PipeLife",
            "SIA Rimi",
            "SIA Wordingday"
        ],
        languages: {
            lv: {
                name: "Latviešu",
                level: "Native"
            },
            rus: {
                name: "Krievu",
                level: "Beginner"
            },
            eng: {
                name: "Angļu",
                level: "Intermediate"
            }
        }
    },
    {
        firstName: "Artis",
        lastName: "Lācis",
        phoneNr: 1234567,
        email: "artis.lacis@gmail.com",
        workExperiences: [
            "SIA Gauja",
            "SIA Daugava",
            "SIA Venta",
            "SIA Abava"
        ],
        languages: {
            lv: {
                name: "Latviešu",
                level: "Native"
            },
            rus: {
                name: "Krievu",
                level: "Beginner"
            },
            eng: {
                name: "Angļu",
                level: "Fluent"
            }
        }
    },
    {
        firstName: "Laima",
        lastName: "Strada",
        phoneNr: 1234567,
        email: "laima.strada@gmail.com",
        workExperiences: [
            "SIA Kurzeme",
            "SIA Vidzeme",
            "SIA Latgale",
            "SIA Zemgale"
        ],
        languages: {
            lv: {
                name: "Latviešu",
                level: "Beginner"
            },
            rus: {
                name: "Krievu",
                level: "Fluent"
            },
            eng: {
                name: "Angļu",
                level: "FNative"
            }
        }
    },
];

const appendListElements = () => {
    listContainer.innerHTML = "";

    cvList.forEach((item) => {
        const cvCard = `
            <div class="list-item">
                <h2 class="title">${item.firstName} ${item.lastName}</h2>
                <p class="text">PhoneNr.: ${item.phoneNr}</p>
                <p class="text">Email: ${item.email}</p>
                <p class="subtitle">Work experiences</p>
                <ul>
                    <li class="text">${item.workExperiences[0]}</li>
                    <li class="text">${item.workExperiences[1]}</li>
                    <li class="text">${item.workExperiences[2]}</li>
                    <li class="text">${item.workExperiences[3]}</li>
                </ul>
                <p class="subtitle">Languages</p>
                <ul>
                    <li class="text">${item.languages.lv.name} - ${item.languages.lv.level}</li>
                    <li class="text">${item.languages.rus.name} - ${item.languages.rus.level}</li>
                    <li class="text">${item.languages.eng.name} - ${item.languages.eng.level}</li>
                </ul>
            </div>
        `;

        listContainer.innerHTML += cvCard;
    })
}

generateListBtn.addEventListener("click", appendListElements);