const prompt = require('prompt-sync')();

const destinasi = prompt('Masukan destinasi perjalanan: ');
const jarak = parseFloat(prompt('Masukan jarak perjalanan (km)'));
const kecepatan = parseFloat(prompt('Masukan kecepatan rata-rata (km/jam)'));

const totalWaktu = jarak / kecepatan;

console.log(
    `Waktu perjalanan yg akan kamu tempuh ke ${destinasi} adalah ${totalWaktu.toFixed(2)} jam`
);
