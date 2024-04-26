/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let i=0;
    let arr=[]
    let tempS='';
    for(let i=0; i<s.length; i++){
    	arr.push(s[i]);
    	tempS+=s[i];
    }
    while(s.length-1!=i){
    	if(tempS==goal){
    		return true;
    	}
    	if(arr.length==0){
    		for(let i=0; i<tempS.length; i++){
    			arr.push(tempS[i]);
    		}
    	}
    	for(let i=0; i<arr.length-1; i++){
    		let temp=arr[i];
    		arr[i]=arr[i+1];
    		arr[i+1]=temp;
    	}
    	tempS='';
    	for(let i=0; i<arr.length; i++){
    		tempS+=arr[i];
    	}
    	arr=[];
    	i++;
    }
	return (tempS==goal)?true:false;
};
console.log(rotateString("abcde", "cdeab"));