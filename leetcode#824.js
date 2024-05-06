/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
	let arr=[];
	let temp='';
	let index=0;
	let finalString='';
	for(let i=0; i<sentence.length; i++){
		if(sentence[i]!=" " && (i!=sentence.length-1)){
			temp+=sentence[i];
		}
		else{
			if(i==sentence.length-1){
				temp+=sentence[i];
			}
			index++;
			let tempStor='';
			for(let j=0; j<temp.length; j++){
				if((temp[j].toLowerCase()!="a"&&temp[j].toLowerCase()!="e"&&temp[j].toLowerCase()!="i"&&temp[j].toLowerCase()!="o"&&temp[j].toLowerCase()!="u")&&j==0){
					tempStor+=temp[j];
				}
				else{
					arr.push(temp[j]);
				}
			}
			if(tempStor!=''){
				arr.push(tempStor);
			}
			arr.push('m');
			arr.push('a');
			for(let k=0;k<index; k++){
				arr.push('a');
			}
			for(let l=0; l<arr.length; l++){
				finalString+=arr[l];
			}
			if(i!=sentence.length-1){
				finalString+=' ';
			}
			temp='';
			arr=[];
		}
	}
    return finalString;
};
console.log(toGoatLatin("I speak Goat Latin"));