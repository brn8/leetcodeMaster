/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
	let count=0;
	let maxCount=0;
	for(let i in nums){
		if(nums[i]==1){
			count++;
		}
		else{
			if(count>maxCount){
				maxCount=count;
			}
			count=0;
		}
	}
	return maxCount;
};
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));