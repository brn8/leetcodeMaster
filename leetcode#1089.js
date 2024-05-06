/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
	let tempArr=[];
	let temp=0;
	for( i=0; i<arr.length; i++){
		tempArr.push(arr[i]);
	}
	for(let i=0; i<tempArr.length;){
		if(tempArr[temp]!=0){
			arr[i]=tempArr[temp];
			temp++;
			i++;
		}
		else{
			arr[i]=0;
			i++;
			console.log(i);
			if(i!=(tempArr.length)){
				arr[i]=0;
			}
			temp++;
			i++;
		}
	}
	return arr;
}
console.log(duplicateZeros([0,0,0,0,0,0,0]));