let kullaniciAdi = "ahmet";
let sifre = "1234";
let dogruKullanici = "ahmet";
let dogruSifre = "1234";

// Koşullar:
// Her ikisi doğru: "Giriş başarılı!"
// Kullanıcı adı yanlış: "Kullanıcı adı hatalı!"
// Şifre yanlış: "Şifre hatalı!"
// Her ikisi yanlış: "Kullanıcı adı ve şifre hatalı!"

if (kullaniciAdi === dogruKullanici && sifre === dogruSifre) {
  console.log("Giriş başarılı!");
} 
else if (kullaniciAdi !== dogruKullanici && sifre !== dogruSifre) {
  console.log("Kullanıcı adı ve şifre hatalı!");
} 
else if (kullaniciAdi !== dogruKullanici) {
  console.log("Kullanıcı adı hatalı!");
} 
else {
  console.log("Şifre hatalı!");
}
