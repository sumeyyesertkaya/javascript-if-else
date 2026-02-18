//let sicaklik = 15;
//let yagmurYagiyor = true;
//let ruzgarliMi = false;

// Öneriler:
// Sıcaksa (25+): "Tişört giy"
// İlıksa (15-24): "Hırka giy"
// Soğuksa (0-14): "Mont giy"
// Çok soğuksa (-10 - 0): "Kalın mont + atkı + eldiven"
// Aşırı soğuksa (-10 altı): "Çok kalın mont + atkı + eldiven + bere"

// EĞER yağmur yağıyorsa: "+ Şemsiye al"
// EĞER rüzgarlıysa: "+ Rüzgarlık giy"

let sicaklik=15;
let yagmurYagiyor=true;
let ruzgarliMi=false;

if (sicaklik>=25){
	console.log("Tişört giy!");
}
else if (sicaklik>=15 && sicaklik<=24){
	console.log("Hırka giy!");
}

else if (sicaklik>=0 && sicaklik<=14){
	console.log("Mont giy!");
}

else if (sicaklik>=-10 && sicaklik<=0){
	console.log("Kalın mont + atkı + eldiven giy!");
}
else if (sicaklik<-10){
	console.log("Çok kalın mont + atkı + eldiven + bere giy!");
}
else {
	// Hiçbir aralığa uymayan durum için (sicaklik NaN veya beklenmeyen değerler için)
	console.log("Geçerli bir sıcaklık girin.");
}

if (yagmurYagiyor===true){
	console.log("+ Şemsiye al!");
}

if (ruzgarliMi===true){
	console.log("+ Rüzgarlık giy!");
}
