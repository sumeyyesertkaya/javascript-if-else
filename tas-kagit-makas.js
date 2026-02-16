// Seçimler
let benimSecimim = "kağıt";        // "taş", "kağıt", veya "makas"
let bilgisayarSecimi = "makas";  // "taş", "kağıt", veya "makas"

console.log("Benim seçimim:" + benimSecimim);
console.log(`Bilgisayar: ${bilgisayarSecimi}`);
console.log("---");

// Berabere kontrolü
if (benimSecimim == bilgisayarSecimi) {
  console.log("Berabere!");
}

// Taş kazanma durumları
else if (benimSecimim == "taş" && bilgisayarSecimi == "makas") {
  console.log("Kazandın! Taş makası kırar!");
}

// Kağıt kazanma durumları
else if (benimSecimim == "kağıt" && bilgisayarSecimi == "taş") {
  console.log("Kazandın! Kağıt taşı sarar!");
}

// Makas kazanma durumları
else if (benimSecimim == "makas" && bilgisayarSecimi == "kağıt") {
  console.log("Kazandın! Makas kağıdı keser!");
}

// Kaybetme durumları (taş-kağıt, kağıt-makas, makas-taş)
else {
  console.log("Kaybettin!");
}