/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
	let finalArr=[];
	for(let i=0; i<words.length; i++){
		let arr=[];
		for(let j=0; j<words[i].length; j++){
			if(words[i][j].toLowerCase()=='q'||words[i][j].toLowerCase()=='w'||words[i][j].toLowerCase()=='e'||words[i][j].toLowerCase()=='r'||words[i][j].toLowerCase()=='t'||words[i][j].toLowerCase()=='y'||words[i][j].toLowerCase()=='u'||words[i][j].toLowerCase()=='i'||words[i][j].toLowerCase()=='o'||words[i][j].toLowerCase()=='p'){
				arr.push(1);
			}
			else if(words[i][j].toLowerCase()=='a'||words[i][j].toLowerCase()=='s'||words[i][j].toLowerCase()=='d'||words[i][j].toLowerCase()=='f'||words[i][j].toLowerCase()=='g'||words[i][j].toLowerCase()=='h'||words[i][j].toLowerCase()=='j'||words[i][j].toLowerCase()=='k'||words[i][j].toLowerCase()=='l'){
				arr.push(2);
			}
			else{
				arr.push(3);
			}
		}
		if(arr.every(s=>s==arr[0])){
			finalArr.push(words[i]);
		}
	}
	return (finalArr);
};
console.log(findWords(["a","b"]));

/*
	let finalArr=[];
	for(let i=0; i<words.length; i++){
		let first=(words[i][0].toLowerCase()=='q'||words[i][0].toLowerCase()=='w'||words[i][0].toLowerCase()=='e'||words[i][0].toLowerCase()=='r'||words[i][0].toLowerCase()=='t'||words[i][0].toLowerCase()=='y'||words[i][0].toLowerCase()=='u'||words[i][0].toLowerCase()=='i'||words[i][0].toLowerCase()=='o'||words[i][0].toLowerCase()=='p');
		let second=(words[i][0].toLowerCase()=='a'||words[i][0].toLowerCase()=='s'||words[i][0].toLowerCase()=='d'||words[i][0].toLowerCase()=='f'||words[i][0].toLowerCase()=='g'||words[i][0].toLowerCase()=='h'||words[i][0].toLowerCase()=='j'||words[i][0].toLowerCase()=='k'||words[i][0].toLowerCase()=='l');
		let third=(words[i][0].toLowerCase()=='z'||words[i][0].toLowerCase()=='x'||words[i][0].toLowerCase()=='c'||words[i][0].toLowerCase()=='v'||words[i][0].toLowerCase()=='b'||words[i][0].toLowerCase()=='n'||words[i][0].toLowerCase()=='m');
		let temp=0;
		if(first){
			temp+=1;
		}
		else if(second){
			temp+=2;
		}
		else{
			temp+=3;
		}
		let count=0;

		for(let j=0; j<words[i].length; j++){
			if(words[i][j].toLowerCase()=='q'||words[i][j].toLowerCase()=='w'||words[i][j].toLowerCase()=='e'||words[i][j].toLowerCase()=='r'||words[i][j].toLowerCase()=='t'||words[i][j].toLowerCase()=='y'||words[i][j].toLowerCase()=='u'||words[i][j].toLowerCase()=='i'||words[i][j].toLowerCase()=='o'||words[i][j].toLowerCase()=='p'){
				if(temp==1){
					count++;
				}
				else{
					break;
				}
			}
			else if(words[i][j].toLowerCase()=='a'||words[i][j].toLowerCase()=='s'||words[i][j].toLowerCase()=='d'||words[i][j].toLowerCase()=='f'||words[i][j].toLowerCase()=='g'||words[i][j].toLowerCase()=='h'||words[i][j].toLowerCase()=='j'||words[i][j].toLowerCase()=='k'||words[i][j].toLowerCase()=='l'){
				if(temp==2){
					count++;
				}
				else{
					break;
				}
			}
			else{
				if(temp==3){
					count++;
				}
				else{
					break;
				}
			}
		}
		if(count==words[i].length){
			finalArr.push(words[i]);
		}
	}
	return finalArr*/