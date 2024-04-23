/**
 * @param {number} num
 * @return {string}
 *
return num.toString(7);
 */
var convertToBase7 = function(num) {
	let arr=[];
	let str="";
	let bool=false;
	if(num<0){
		bool=true;
		num=num*-1;
	}
	else if(num==0){
		return "0"
	}
	while(num){
		str=(num%7)+str;
		num=Math.floor(num/7);
	}
	if(bool){
		str="-"+str;
	}
	return str;
};
console.log(convertToBase7(-7));