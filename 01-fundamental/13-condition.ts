// if
// if else
// if else if else

// Umur di bawah 10 tahun => Where is your parent?
// Umur di bawah 17 tahun => Go Away!
// Umur di atas 18 tahun => Welcome

let userAge = 16;

//Sintaks oke tapi urutan salah

if (userAge >= 18) {
    console.log("Welcome");
} else if (userAge >= 10) {
    console.log("Where is your parent?"); 
} else {
    console.log("Go Away");
};

/* ------------------------ Sintaks dan urutan benar ------------------------ */
if (userAge <= 10) {
    console.log('Where is your parent?');
} else if (userAge <= 15) {
    console.log("Wrong place brother";)
} else if (userAge <= 17) {
    console.log('Go Away!')
} else {
    console.log('Welcome')
};

/* --------------------------------- Nested --------------------------------- */
if (userAge <= 10) {
    console.log('Where is your parent?');
} if (userAge <= 15) {
    console.log("Wrong place brother";)
} if (userAge <= 17) {
    console.log('Go Away!')
};

/* ------------------------------- SWITCH CASE ------------------------------ */
const fruit = 'Banna';

switch (fruit) {
    case "Apple":
        console.log("Red");
        break;
    case "Grape":
        console.log('Purple');
        break
    default:
        console.log("Black");
};

