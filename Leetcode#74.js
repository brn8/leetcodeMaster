var searchMatrix = function(matrix, target) {
	  let rowstarting=0;
    let rowEnding=matrix.length-1;
    while(rowstarting<=rowEnding){
        let left = 0;
		let right = matrix[rowstarting].length-1; 
		while (left<=right){
			let mid = Math.floor((left+right)/2);
			if(matrix[rowstarting][mid]==target){
				return true;
			}
			else if(matrix[rowstarting][mid]<target){
				left=mid+1;
			}
			else{
				right=mid-1;
			}

    }
		  rowstarting++;

	}
	return false;
    
};
console.log(searchMatrix([[1,2]], target = 2));