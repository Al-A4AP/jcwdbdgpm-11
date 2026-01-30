/* ------------------------------ intro console ----------------------------- */
console.log("Hello worl!");
console.info("ini informasi");
console.warn("ini peringatan");
console.error("ini error");

/* --------------------------------- comment -------------------------------- */
// single line comment
/* 

multi line comment

*/

/* ----------------------------- intro variable ----------------------------- */
// let, cons, var
let city = "Bandung";
console.log(city+" oke");
city="Jogja";
console.log(city+" "+"dingin");
console.log(city+" macet");
console.log(city+ " tenang");

/* -------------------------- var vs (let & const) -------------------------- */
// let & const :
//1. VAriable yg dibuat menggunakan const/let hanya bisa diakses di dalam scope tempat dia dibuat atau scope yg lebih dalam
// 2. Akan error kalau diakses sebelum dibuat

//var
//1. Variable yg dibuat menggunakan var akan selalu bersifat global
//2. Tidak ada error walalu diakses sebelum dibuat

//global scope
let age = 50;
console.log(age);
//console.log(address);
console.log(gender);

{
    // lv 1 scope
    let address = "Asia Afrika";
    var gender ="Male";
    console.log(age);
    console.log(address);
    console.log(gender);

    {
        //lv 2 scope
        console.log(address);
        console.log(gender);
    }
}

{
}

console.log (gender);

console.log(email)
var email ="example@mail.com";

/* ------------------------------- let & const ------------------------------ */
// 1. Block scope (variable hanya bisa diakses di block scope yg sama atau block scope yg lebih dalam)
let globalName="Joko";
//console.log(scope1Name);

{
    let scope1Name = "Andi";
    console.log(scope1Name);
 
    {
let scope2Name= "Radit";
console.log(scope1Name)
}
}

/* ------------------------------ let vs const ------------------------------ */
let country = "indonesia"; //assigment
console.log(country);
country = "Singapore"; //ganti / re-assign
console.log(country);

const score = 100;
console.log(score);
score = 1000;
console.log(score);
