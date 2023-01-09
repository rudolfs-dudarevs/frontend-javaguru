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
// 7. Brīvi noformēt katru .list-hero elementu ar CSS iekš list-container.css faila.
//    Ieteicams izveidojot katra .list-hero child elementus jeb tur iekšā esošos <h2>, <p>, <ul> un <li> elementus - piešķirt šiem elementiem class atribūtus, kad tie tiek izveidoti.

const listContainer = document.getElementById("list-container");
const generateListBtn = document.getElementById("generate-list-btn");

const cvList = [
    {
        firstName: "Tony",
        lastName: "Stark",
        phoneNr: 666000751,
        email: "tony.stark@avengers.com",
        workExperience: [
            "Avengers",
            "Starks Industries",
            "Illuminati",
            "S.H.I.E.L.D."
        ],
        powers: {
            sen:{
                name: "Senses",
                level: "Heightened"
            },
            str:{
                name: "Strength",
                level: "Superhuman"
            },
            int:{
                name: "Intelligence",
                level: "Genius"
            }
        },
        avatar: "https://www.disneyphile.fr/wp-content/uploads/2020/12/iron-man-960x540.jpg"
    },

    {
        firstName: "Steve",
        lastName: "Rogers",
        phoneNr: 666000755,
        email: "steve.rogers@avengers.com",
        workExperience: [
            "Avengers",
            "Secret Avengers",
            "Illuminati",
            "S.H.I.E.L.D."
        ],
        powers: {
            sen:{
                name: "Senses",
                level: "Superhuman"
            },
            str:{
                name: "Strength",
                level: "Superhuman"
            },
            int:{
                name: "Intelligence",
                level: "Superhuman"
            }
        },
        avatar: "https://images.thedirect.com/media/article_full/capagent_1.jpg"
    },

    {
        firstName: "Natasha",
        lastName: "Romanoff",
        phoneNr: 666000777,
        email: "natasha.romanoff@avengers.com",
        workExperience: [
            "Avengers",
            "Secret Avengers",
            "Russian Killer association",
            "S.H.I.E.L.D."
        ],
        powers: {
            sen:{
                name: "Senses",
                level: "Heightened"
            },
            str:{
                name: "Strength",
                level: "Human"
            },
            int:{
                name: "Intelligence",
                level: "Above average"
            }
        },
        avatar: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/05/Black-Widow-MCU-Timeline-Complete-Story-SR.jpg"
    },
    

    {
        firstName: "Bruce",
        lastName: "Banner",
        phoneNr: 666000666,
        email: "bruce.banner@avengers.com",
        workExperience: [
            "Avengers",
            "The Defenders",
            "Illuminati",
            "Horizon Labs"
        ],
        powers: {
            sen:{
                name: "Senses",
                level: "Superhuman"
            },
            str:{
                name: "Strength",
                level: "Superhuman"
            },
            int:{
                name: "Intelligence",
                level: "Genius"
            }
        },
        avatar: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/11/Hulk-Smart-Bruce-Banner.jpg"
    }
]

const appendListElements = () => {
    listContainer.innerHTML = "";

    cvList.forEach((hero) => {
        const cvCard = `
            <div class="list-hero">
            <img src="${hero.avatar}" alt="Avenger" style="width:417px;height:235px;">
                <h2 class="title">${hero.firstName} ${hero.lastName}</h2>
                <p class="text">PhoneNr.: ${hero.phoneNr}</p>
                <p class="text">Email:<p class="email"> ${hero.email}</p></p>
                <p class="subtitle">Work experiences</p>
                <ul>
                    <li class="text">${hero.workExperience[0]}</li>
                    <li class="text">${hero.workExperience[1]}</li>
                    <li class="text">${hero.workExperience[2]}</li>
                    <li class="text">${hero.workExperience[3]}</li>
                </ul>
                <p class="subtitle">POWER SKILLS</p>
                <ul>
                    <li class="text">${hero.powers.sen.name} - ${hero.powers.sen.level}</li>
                    <li class="text">${hero.powers.str.name} - ${hero.powers.str.level}</li>
                    <li class="text">${hero.powers.int.name} - ${hero.powers.int.level}</li>
                </ul>
            </div>
        `;

        listContainer.innerHTML += cvCard;
    })
}

generateListBtn.addEventListener("click", appendListElements);