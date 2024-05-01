/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
	let numBirnary="";
	let reverseBinary="";
	let reverseNum=0;
	let increment=0;;
	while(num!=0){
		numBirnary=(num%2)+numBirnary;
		num=Math.floor(num/2);
	}
	for(let i=0;i<numBirnary.length; i++){
		if(numBirnary[i]==1){
			reverseBinary+=0;
		}
		else{
			reverseBinary+=1;
		}
	}
	for(let j=reverseBinary.length-1;j>=0; j--){
		if(reverseBinary[j]=='1'){
			reverseNum+=(2**increment);
			increment++;
		}
		else{
			increment++;
		}
	}
	return reverseNum;
};
console.log(findComplement(4));