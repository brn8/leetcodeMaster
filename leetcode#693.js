/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
	let bit="";
	let previous=-1;
	while(n!=0){
		bit=bit+(n%2);
		n=Math.floor(n/2);
		if(bit[bit.length-1]==previous){
			return false;
		}
		else{
			previous=bit[bit.length-1];
		}
	}
	return true;

};
console.log(hasAlternatingBits(3));
/*let bit="";
	while(n!=0){
		bit=bit+(n%2);
		n=Math.floor(n/2);
	}
	let temp=bit[0];
	let i=1;
	while(i!=bit.length){
		if(bit[i]==temp){
			return false;
		}
		else{
			temp=bit[i];
			i++;
		}
	}
	return true;*/