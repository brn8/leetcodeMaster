/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
	let largetestInterger=-1;
	let index=-1;
	for(let i=0; i<nums.length;i++){
		if(nums[i]>largetestInterger){
			largetestInterger=nums[i];
			index=i;
		}
	}
	
	for(let i=0; i<nums.length;i++){
		let twiceAsLarge=nums[i]*2;
		if(!(largetestInterger>=twiceAsLarge) && i!=index){
			return -1;
		}	
	}
	return index;
};
console.log(dominantIndex([3,6,1,0]));