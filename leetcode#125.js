/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	let str="";
	for(let i=0; i<s.length; i++){
		if(s[i]!=" "){
			if((s[i].toLowerCase()>="a" && s[i].toLowerCase()<="z")||(s[i]>=0 && s[i]<=9)){
				str+=s[i].toLowerCase();
			}
		}
	}
	for(let j=0; j<Math.floor(str.length/2); j++){
		if(str[j]!=str[str.length-1-j]){
			return false;
		}
	}
	return true;
};
console.log(isPalindrome("p"));