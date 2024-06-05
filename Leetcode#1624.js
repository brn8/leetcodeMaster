/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
	let c=0;
	let max=-1;
	for(let i=0; i<s.length; i++){
		let current=s[i];
		let temp=0;
		for(let j=i+1; j<s.length; j++){
			if(current!=s[j]){
			c++;
		}
		else{
			temp++;
			if(temp>1){
					c++;
			}
			if(c>max){
				max=c;
			}

		}
		}
		c=0;
	}
	return max;
    
};
console.log(maxLengthBetweenEqualCharacters("mgntdygtxrvxjnwksqhxuxttt"))
