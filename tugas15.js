function sisiMiring(a,b){
	a2 = Math.pow(a,2)
	b2 = Math.pow(b,2)
	c2 = a2 + b2
	miring = Math.sqrt(c2)
	return miring
}

var ab = 8
var bc = 6

console.log("Nilai AB : ",ab)
console.log("Nilai BC : ",bc)
console.log("panjang sisi AC pada segitiga siku-siku tersebut adalah : ",sisiMiring(ab,bc)," cm")