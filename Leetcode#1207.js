/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
	let sortArr=arr.sort();
	let objArr=[];
	let count=1;
	let temp=sortArr[0];
	for(let i=1; i<=sortArr.length; i++){
		if(temp==sortArr[i]){
			count++;
		}
		else{
			objArr.push({value:temp,counts:count});
			count=1;
			temp=sortArr[i];
		}
	}
	objArr.sort((a,b)=>a.counts-b.counts);
	let s=objArr[0].counts;
	for(let i=1; i<objArr.length; i++){
		if(s==objArr[i].counts){
			return false;
		}
		else{
			s=objArr[i].counts;
		}
	}
	return true;
};
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));