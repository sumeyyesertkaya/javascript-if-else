//let saat = 14;

// Koşullar:
// 6-11 arası: "Günaydın!"
// 12-17 arası: "İyi günler!"
// 18-21 arası: "İyi akşamlar!"
// 22-5 arası: "İyi geceler!"

// Beklenen çıktı (saat 14 için) 
//İyi günler!

let saat = 1;

if (saat >=6 && saat <=11){
    console.log("Günaydın");
}

else if (saat>=12 && saat <=17){
    console.log("iyi günler");
}

else if (saat>=18 && saat<=21){
    console.log("iyi akşamlar");
}

else {
    console.log("iyi geceler");
}