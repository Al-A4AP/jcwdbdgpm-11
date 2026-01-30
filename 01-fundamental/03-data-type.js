/* -------------------------------------------------------------------------- */
/*                             PRIMITIVE DATA TYPE                            */
/* -------------------------------------------------------------------------- */
/* -------------------------------- 1. String ------------------------------- */
// "!90ah"
// Fungsi : Untuk menyimpan sebuah informasi yg berbentuk teks
"abc";
"1234";
//'abc';
`abc`;

/* -------------------------------- 2. Number ------------------------------- */
//Fungsi : untuk menyimpan value yg akan kita kenakan operasi matematika
// 1213212
10;
20;
50.5;
10 * 10;
5 + 5;

/* ------------------------------- 3. Boolean ------------------------------- */
//Fungsi : Untuk menyimpan value yg isinya hanya ada 2 kemungkinan, FALSE/TRUE

true;
false;

/* ------------------------------ 4. Undefined ------------------------------ */
//Fungi : Untuk merepresentasikan value yg kososng (dari awal memang sudah kosong)
undefined;
let name;
let score;
let points;
console.log(name, score, points);

/* --------------------------------- 5. Null -------------------------------- */
//Fungsinya: Untuk merepresentasikan value yg kosong(awalnya ada tapi dikosongkan setelahnya
null;
let value = "Hello";
value = null;
console.log(value);

/* -------------------------------------------------------------------------- */
/*                                   typeof                                   */
/* -------------------------------------------------------------------------- */
console.log(typeof "abc");
console.log(typeof 123);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

/* -------------------------------------------------------------------------- */
/*                                NON PRIMITIVE                               */
/* -------------------------------------------------------------------------- */
/* 1. Array
   2. Object:
        - Date
        - ....

*/
console.log(new Date());
console.log(new Date ("2020-03-01"));
console.log(new Date (1));