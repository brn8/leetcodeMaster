/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {

    let arr=[];
    let finalArr=[];
    for(let i=0; i<names.length; i++){
    	arr.push({
    		names:names[i],
    		heights: heights[i]
    	})
    }
    arr.sort((a,b)=> b.heights-a.heights);

   for(let i=0; i<names.length; i++){
   	finalArr.push(arr[i].names)
   }
  
    return finalArr;

    /*	for(let i=0; i<names.length; i++){
		let index=-1;
		let maxVal=heights[i]
		for(let j=i+1; j<names.length; j++){
			if(maxVal<heights[j]){
				maxVal=heights[j];
				index=j;
			}
		}
		if(index!=-1){
			let temp=heights[i];
			heights[i]=heights[index];
			heights[index]=temp;
			let tempName=names[i];
			names[i]=names[index];
			names[index]=tempName;

		}
		
	}
    return names;*/
};
console.log(sortPeople(["IEO","Sgizfdfrims","QTASHKQ","Vk","RPJOFYZUBFSIYp","EPCFFt","VOYGWWNCf","WSpmqvb"], 
 [17233,32521,14087,42738,46669,65662,43204,8224]));