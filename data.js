const nama = "Kevin Mawuntu";
let alamat = "Luaan Lingkuan III";
const umur = 21;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (umur > 3 && umur < 11) {
        generasi = "Generasi anak-anak";
    }
    else if (umur > 10 && umur < 17) {
        generasi = "Generasi remaja"; 
    }
    else if (umur > 16 && umur < 30) {
        generasi = "Generasi dewasa";
    }
    else if (umur > 29) {
        generasi = "Generasi tua";
    }
    else if (umur >= 0 && umur < 4) {
        generasi = "Generasi balita";
    }
    else {
        generasi = "berapa dah lu";

    }

    return biodata.innerHTML = generasi;

    // console.log(`nama saya adalah ${nama} umur saya ${umur} dan alamat saya ${alamat} `);
}

console.log(nama);
console.log(umur);
console.log(alamat);

generateBiodata();      
