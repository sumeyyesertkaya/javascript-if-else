// Kredi verilme koşulları (HEPSİ olmalı):
// - Gelir 5000+ olmalı
// - Borç 3000'den az olmalı
// - Kredi notu 700+ olmalı
//
// Sonuç:
// Hepsi uyuyorsa: "Kredi onaylandı!Limit: 50000 TL"
// Biri bile uymazsa: "Kredi reddedildi" + hangi koşul tutmadı yaz

let gelir = 3000;
let borc = 4000;
let krediNotu = 750;

if (gelir >= 5000 && borc <= 3000 && krediNotu >= 700) {
  console.log("Kredi onaylandı! Limit: 50000 TL");
} 
else {
  console.log("Kredi reddedildi! ");
  if (gelir < 5000) {
    console.log("- Geliriniz 5000'den az");
  }
  if (borc > 3000) {
    console.log("- Borcunuz 3000'den fazla");
  }
  if (krediNotu < 700) {
    console.log("- Kredi notunuz 700'den az");
  }
}
