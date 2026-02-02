/* --------------------------------- 01 & 02 -------------------------------- */
let l = 5;
let w = 3;
let hasilLW = l * w; 
let perimetlLW = 2 * hasilLW;

console.log(hasilLW);
console.log(perimetlLW);

/* ----------------------------------- 03 ----------------------------------- */
let r = 5;
let PI = Math.PI;
let hasilDiameter = 2 * r;
let hasilCF = 2 * PI * r;
let hasilArea = PI * r * r;

console.log(hasilDiameter);
console.log(hasilCF);
console.log(hasilArea);

/* ----------------------------------- 04. ---------------------------------- */
let a = 80;
let b = 65;
let hasilAngle = 180 - (a + b);

console.log(hasilAngle);

/* ----------------------------------- 05. ---------------------------------- */
let totalHari = 400;
let tahun = (totalHari / 365);
let sisaHari = totalHari % 365;
let bulan = (totalHari / 30);
let hari = sisaHari % 30;

console.log (tahun+ " Year", bulan+ " Month", hari+" Days");

let tahunFix = (totalHari / 365).toFixed(0);
let bulanFix = (totalHari / 30).toFixed(0);
let hariFix = sisaHari % 30;

console.log (tahunFix+ " Year", bulanFix+ " Month", hariFix+" Days");

/* ----------------------------------- 06. ---------------------------------- */
let tgl01 = new Date ("2022-01-20");
let tgl02 = new Date ("2022-01-22");

console.log(tgl01.getFullYear());
console.log(tgl01.getMonth());
console.log(tgl01.getDate());
console.log(tgl01.getTime());
let tgl01time = (tgl01.getTime());


console.log(tgl02.getFullYear());
console.log(tgl02.getMonth());
console.log(tgl02.getDate());
console.log(tgl02.getTime());
let tgl02time = (tgl02.getTime());

let perbedaanWaktu = tgl02time - tgl01time;
console.log(perbedaanWaktu);

let perbedaanHari = perbedaanWaktu / (1000 * 60 * 60 * 24);
console.log(perbedaanHari);
