/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
	let arr=[];
	let tempStr="";
	while(left<=right){
		tempStr=tempStr+left;
		let bool=true;
		for(let i=0; i<tempStr.length; i++){
			if(parseInt(tempStr[i])==0||left%parseInt(tempStr[i])!=0){
				bool=false;
				break;
			}
		}
		if(bool){
			arr.push(left);
		}
		left++;
		tempStr="";
	}  
	return arr;
};
console.log(selfDividingNumbers(1,22))