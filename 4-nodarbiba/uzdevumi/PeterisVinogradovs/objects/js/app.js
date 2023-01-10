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

const peterisVinogradovs = {
    firstName: "Peteris",
    lastName: "Vinogradovs",
    email: "p.vinogradovs@gmail.com",
    telNr: 28317327,
    workExperience: [
        "NCH Capital",
        "Tenisa veikals",
        "Mārupes Tenisa Skola"
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
        }
    }
}

console.log("Person full name is: ", peterisVinogradovs.firstName + " " + peterisVinogradovs.lastName);

console.log (peterisVinogradovs.firstName + " " + peterisVinogradovs.lastName, "worked in: " + peterisVinogradovs.workExperience[1]);

console.log(peterisVinogradovs.firstName + " " + peterisVinogradovs.lastName, `${peterisVinogradovs.languages.eng.name} language knowledge is: ${peterisVinogradovs.languages.eng.level}`);
