//let hizSiniri = 90;
//let aracHizi = 105;

// Koşullar:
// Hız sınırında veya altında: "Güvenli sürüş!"
// 1-10 km fazla: "Yavaşla!"
// 11-20 km fazla: "Ceza: 500 TL"
// 21+ km fazla: "Ağır ceza: 2000 TL + Ehliyet askıya alınacak!"

let hizSiniri=90;
let aracHizi=105;

if (aracHizi<=hizSiniri){
	console.log("Güvenli sürüş.");
}

else if (aracHizi>=hizSiniri+1 && aracHizi<=hizSiniri+10){
	console.log("Yavaşla!");
}

else if ( aracHizi>=hizSiniri+11 && aracHizi<=hizSiniri+20){
	console.log("Ceza:500 Tl");
}

else {
	console.log("Ağır Ceza: 2000 TL");}
