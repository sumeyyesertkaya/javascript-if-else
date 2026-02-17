//let sicaklik = 28;

// Koşullar:
// 30+ derece: "Çok sıcak! 🥵 Klimayı aç"
// 20-29 derece: "Hava güzel! 😊"
// 10-19 derece: "Serin! 🧥 Ceket al"
// 0-9 derece: "Soğuk! ❄️ Kalın giy"
// 0'dan az: "Dondurucu soğuk! 🥶 Dışarı çıkma"

let sicaklik=25;

if (sicaklik>=30) {
	console.log ("Çok sıcak!");
}

else if (sicaklik>=20 && sicaklik<=29){
	console.log("Hava güzel!");
}

else if (sicaklik>=10 && sicaklik<=19){
	console.log("Hava serin!");
}

else if (sicaklik>=0 && sicaklik<=9){
	console.log("Hava soğuk!");
}

else {
	console.log("Dondurucu soğuk!");
}
