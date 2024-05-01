/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	let finalArr=[];
	for(let i=0; i<nums1.length; i++){
		for(let j=0;j<nums2.length; j++){
			if(nums1[i]==nums2[j]){
				finalArr.push(nums1[i]);
				nums2[j]=-1;
				break;
			}
		}
	}
	return finalArr;
};
console.log(intersect([6,6,4,4,0,0,8,1,2],[6]));