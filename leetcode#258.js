/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	let str=num.toString();
	while(str.length!=1){
		let temp=0;
		for(let i=0;i<str.length;i++){
			temp+=parseInt(str[i]);
		}
		str=temp.toString();
	}
	return parseInt(str);
};
console.log(addDigits(29));