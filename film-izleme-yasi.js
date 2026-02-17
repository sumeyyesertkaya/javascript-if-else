//let yas = 16;
//let ebeveynIzniVar = false;
//let filmYasSiniri = 18;

// Koşullar:
// Yaş yeterli: "Filmi izleyebilirsin! 🎬"
// Yaş yetmez AMA ebeveyn izni var: "Ebeveyn eşliğinde izleyebilirsin 👨‍👩‍👦"
// Yaş yetmez VE izin yok: "Bu filmi izleyemezsin ❌"

let yas=13;
let ebeveynİzniVar= true;
let filmYasSiniri=18;

if (yas>=16){
	console.log("Filmi izleyebilirsin!");
}

else if (yas<=16 && ebeveynİzniVar==true){
	console.log("Ebeveyn eşliğinde izleyebilirsin.")
}

else {
	console.log("Bu filmi izleyemezsin!")}
