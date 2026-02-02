const prompt = require("prompt-sync")();

let namaItem = prompt('Masukan nama item:');
let harga = parseFloat(prompt("Masukan harga item:"));
let tanyaMember = prompt('Apakah member? (1 = Yes, 2 = No):');
let isMember = tanyaMember === "1" ? 1 : 0;

let taxRate = 0.5;
let diskonRate = 0.15;

let diskonJml= harga * diskonRate * isMember;
let taxJml = harga * taxRate;
let jmlTotal = harga + taxJml - diskonJml;

console.log('')
console.log('RECEIPT');
console.log('')
console.log('item:', namaItem)
console.log('Base Price: ', harga);
console.log('Tax: ', taxJml);
console.log('Discount: ', diskonJml);
console.log('')
console.log('Total: ', jmlTotal);