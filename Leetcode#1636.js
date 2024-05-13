/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
	let sortedArray=nums.sort();
	let count=1; 
	let prev=nums[0];
	let arr=[];
	let finalArray=[];
	for(let i=1; i<=sortedArray.length; i++){
		if(prev==sortedArray[i]){
			count++;
		}
		else{
			arr.push({
				num:prev,
				frequency: count
			})
			count=1;
			prev=sortedArray[i];
		}
		}
		arr.sort((a,b)=>a.frequency-b.frequency);
		arr.sort((a,b)=>(a.frequency==b.frequency)?(b.num-a.num):'');

		for(let i=0; i<arr.length; i++){
			for(let j=0; j<arr[i].frequency; j++){
				finalArray.push(arr[i].num);
			}
		}
		return finalArray;
    
};
console.log(frequencySort([2,3,1,3,2]));