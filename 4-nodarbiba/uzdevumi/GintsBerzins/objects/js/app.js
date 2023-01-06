// Izveidot Objektu, kas saturēs informāciju par jūsu personīgo vai izdomāta tēla CV.

// 1. Mainiga nosaukums, kurš satur Objektu ir vardsUzvards (jūsu vārds/uzvārds)
// 2. CV objekts satur 3 īpašības (properties) ar string tipa vērtību:
//    -- firstName
//    -- lastName
//    -- email
// 3. CV objekts satut 1 īpašību (property) ar number tipa vērtību:
//    -- telNr
// 4. CV objekts satur 1 īpašību ar masīva tipa vērtību.
//    -- workExperience
//    Šis masīvs satur 4 string tipa vērtība - 4 jūsu iepriekšējo darbavietu nosaukumus.
// 5. CV objekts satur 1 īpašību ar objekta tipa vērtību.
//    -- languages
//    Languages objektā ir 3 īpašības ar nosaukumiem lv, rus, eng, piem.
//    Katra no languages objekta īpašībām ir objekts, kas satur 2 īpašības - name, level.
//    
//    languages: {
//          lv: {
//             name: "Latviešu",
//             level: "Native"
//          },
//          rus: {
//              ...
//          }, 
//          eng: {
//              ...
//          }
//    }
//
// 6. Izvadīt konsolē CV objekta īpašību firstName un lastName apvienojumu.
// 7. Izvadīt konsolē CV objekta īpašības workExperience 2 elementu (index 1).
// 8. Izvadīt konsolē CV objekta īpašības languages objekta eng īpašības name un level apvienojumu.
//    -- piem., vardsUzvards.languages.lv objekta īpašību apvienojums izskatītos šādi:
//       Latviešu - Native 
//       Un tiktu panākta ar string literal pierakstu `${vardsUzvards.languages.lv.name} - ${vardsUzvards.languages.lv.level}`


const person = {
    firstName: "Gints",
    lastName: "Bērziņš",
    email: "berzins.gints@gmail.com",
    telNr: 29109609,
    workExperience: [
        "Latvijas Tālrunis",
        "Euroart",
        "Latvijas Tālrunis",
        "Capital"
    ],
    languages: {
        lat: {
            name: "Latviešu",
            level: "Native"
        },
        rus: {
            name: "Русский",
            level: "B2"
        },
        eng: {
            name: "English",
            level: "A2"
        }
    }
}

console.log("Person full name: ", person.firstName + " " + person.lastName); 
console.log("Person contacts: ", person.telNr + " | " + person.email);
// console.log("Work experience: ", person.workExperience[person.workExperience.length-3]);
console.log("Work experience: ", person.workExperience[1]);
console.log(`Languages: ${person.languages.eng.name} - ${person.languages.eng.level}`);
