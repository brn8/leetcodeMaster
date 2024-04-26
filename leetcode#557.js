/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	let arr=[];
	let finalString="";
    for(let i=0; i<s.length; i++){
    	if(s[i]!=" "){
    		arr.push(s[i]);
    	}
    	else{
    		for(let j=arr.length-1; j>=0; j--){
    			finalString=finalString+arr[j];
    		}
    		finalString+=" ";
    		arr=[];
    	}
    }
    if(arr.length!=0){
    	for(let j=arr.length-1; j>=0; j--){
    			finalString=finalString+arr[j];
    		}
    }
    return finalString;
};
console.log(reverseWords("Let's take LeetCode contest"));