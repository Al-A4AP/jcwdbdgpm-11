/* -------------------------------------------------------------------------- */
/*                                   METHOD                                   */
/* -------------------------------------------------------------------------- */
//Fitur spesial yg ada di sebuah value/ tipe data

/* ---------------------------- 1. String Method ---------------------------- */
console.log("MaU makaN SeKaraNG".toUpperCase());
console.log("MaU makaN SeKaraNG".toLowerCase());

console.log("HAri ini cerah sekali". slice(0,8));
console.log("Noel sedang jalan-jalan di depan rumah Noel".replaceAll ("Noel", "****"));

console.log("Noel sedang jalan-jalan di depan rumah Noel".split (" ").join(""));

/* ---------------------------- 2. NUmber Method ---------------------------- */
console.log((121.46464).toFixed(2));

/* ----------------------------- 3. Date Method ----------------------------- */
const bithdate = new Date("1998-05-01");

console.log(bithdate.getFullYear());
console.log(bithdate.getMonth());
console.log(bithdate.getDay());
console.log(bithdate.getDate());
console.log(bithdate.getTime());

bithdate.setMonth(11);
console.log(bithdate);

//JS & TS disinsi menghitung bulan mulai dari angka 0

/* ---------------------------------- NOTES --------------------------------- */
let array =["A", "B", "C"];
console.log(array[0]);