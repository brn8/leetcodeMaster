/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
	let count=1;
	let finalCount=1;
	let previous='';
	for(let i=0; i<s.length; i++){
		if(s[i]!=previous){
			previous=s[i];
			if(count>finalCount){
				finalCount=count;
			}
			count=1;
		}
		else{
			count++;
			if(count>finalCount){
				finalCount=count;
			}
		}
	}
	return s.length!=0?finalCount:0;
};
console.log(maxPower("CC"));