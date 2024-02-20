var findMedianSortedArrays = function(nums1, nums2) {
    let finalArray= nums1.concat(nums2).sort((a,b)=>a-b);
    if(finalArray.length%2==0){
    	return (finalArray[Math.trunc(finalArray.length/2)-1]+finalArray[Math.trunc(finalArray.length/2)])/2;
    }
    else{
    	return finalArray[Math.trunc(finalArray.length/2)];
    }
};
console.log(findMedianSortedArrays([3],[-2,-1]))