/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var arrangeCoins = function(n) {
	let completeRow=0;
	let totalCount=0;
	let staircaseCount=1;
	while(totalCount<n){
		completeRow++;
		totalCount+=staircaseCount;
		staircaseCount++;
	}
	return (totalCount-n==0?completeRow:completeRow-1);
};
console.log(arrangeCoins(5));

/*let count=0;
	let totalCount=0;
	let previous=0;
	let stair=0;
	while(true){
		if(totalCount<n){
			count=previous+1;
			previous=count;
			totalCount+=count;
			stair++;
		}
		else{
			break;
		}
	}
	return totalCount-n!=0?stair-1:stair;
	*/
