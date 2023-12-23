//1768. Merge Strings Alternately
var mergeAlternately = function(word1, word2) {
	let str='';
	let maxLength=Math.max(word1.length,word2.length);
	for(let i=0; i<maxLength; i++){
			if(word1[i]!=undefined){
				if(word2[i]!=undefined){
					str+=word1[i];
					str+=word2[i];
				}
				else{
					str+=word1[i];
				}
			}
			else{
				str+=word2[i];
			}
		}
		
	return str;

    
};
console.log(mergeAlternately("ab", "pqrs"));