{
/* -------------------------------- Rectangle ------------------------------- */
let length = 5;
let width = 3;

/* ---------------------------------- Area of Rectangle ---------------------------------- */
let AreaRectangle = length * width;
console.log("Area of Rectangle:", AreaRectangle); 

/* -------------------------------- Perimeter of Rectangle ------------------------------- */
let PerimeterRectangle = 2 * (length*width);
console.log("Per Of Rectangle", PerimeterRectangle );

/* -------------- Diameter, Circumference and Area of a Circle -------------- */
let radius = 5;
const PI = Math.PI;

let diameter = 2 * radius;
let circumference = 2 * PI * radius;
let areaCircle = PI * radius * radius;

console.log("Diameter:", diameter); // 10
console.log("Circumference:", circumference.toFixed(4));
console.log("Area:", areaCircle.toFixed(3));

/* --------------- Angles of Triangle if Two Angles are Given --------------- */
let a = 80;
let b = 65;

let c = 180 - (a + b);
console.log("Angle:", c);

/* ----------------- Convert Days to Years, Months and Days ----------------- */
let totalDays = 400;

let years = Math.floor(totalDays / 365);
let remainingDays = totalDays % 365;

let months = Math.floor(remainingDays / 30);
let days = remainingDays % 30;

console.log(`${years} year, ${months} month, ${days} day`);

/* -------------------- Difference Between Dates in Days -------------------- */
let tgl1: Date = new Date("2022-01-20");
let tgl2: Date = new Date("2022-01-22");

let diffTime: number = Math.abs(tgl2.getTime() - tgl1.getTime());
let diffDays: number = diffTime / (1000 * 60 * 60 * 24);

console.log("Difference in days:", diffDays);
}
