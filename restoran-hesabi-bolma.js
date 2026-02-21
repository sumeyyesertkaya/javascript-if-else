// Hesaplama:
// - Hesabı kişi sayısına böl
// - Eğer servis iyiyse %10 bahşiş ekle
// - Eğer hesap 100 TL'den azsa bahşiş ekleme
//
// Çıktı:
// "Kişi başı: X TL"
// "Bahşiş eklendi: Y TL" (varsa)
// "Toplam ödeme: Z TL"

let hesap = 500;
let kisiSayisi = 4;
let servisIyiydi = true;

// Bahşiş: sadece servis iyiyse ve hesap 100 TL ve üzeriyse
let bahsisTutari = 0;
if (servisIyiydi === true && hesap >= 100) {
  bahsisTutari = hesap * 10 / 100;
}

// Toplam hesap (hesap + bahşiş) ve kişi başı ödeme
let toplamHesap = hesap + bahsisTutari;
let kisibasi = toplamHesap / kisiSayisi;

// Çıktı
console.log("Kişi başı: " + kisibasi + " TL");
if (bahsisTutari > 0) {
  console.log("Bahşiş eklendi: " + bahsisTutari + " TL");
}
console.log("Toplam ödeme: " + kisibasi + " TL");
