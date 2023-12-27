const nama = "Kevin Mawuntu";
let alamat = "Luaan Lingkuan III";
const umur = 21;
const keterangan = umur + ' Tahun';

let biodatanama = document.getElementById('biodatanama');

function tampilkanNama() {
    
   return biodatanama.innerHTML = nama;
    
}

let biodatanama1 = document.getElementById('biodatanama1');

function tampilkanAlamat() {
    return biodatanama1.innerHTML = alamat;
}

let biodatanama2 = document.getElementById('biodatanama2');

function tampilkanUmur() {
    return biodatanama2.innerHTML = keterangan;
}

let biodatanama3 = document.getElementById('biodatanama3');

function generateBiodata() {
    let generasi;

    if (umur > 3 && umur < 11) {
        generasi = "generasi anak-anak";
    }
    else if (umur > 10 && umur < 17) {
        generasi = "generasi remaja"; 
    }
    else if (umur > 16 && umur < 30) {
        generasi = "generasi dewasa";
    }
    else if (umur > 29) {
        generasi = "generasi tua";
    }
    else if (umur >= 0 && umur < 4) {
        generasi = "generasi balita";
    }
    else {
        generasi = "Umur berapa dah lu";

    }

    return biodatanama3.innerHTML = generasi;

    // console.log(`nama saya adalah ${nama} umur saya ${umur} dan alamat saya ${alamat} `);
}

console.log(nama);
console.log(keterangan);
console.log(alamat);

tampilkanNama();

tampilkanAlamat();

tampilkanUmur();

generateBiodata();