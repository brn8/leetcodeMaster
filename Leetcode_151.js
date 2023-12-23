//151. Reverse Words in a String
var reverseWords = function(s) {
    let arr=[];
    let str='';
    let finalArr=''
    let i=0;
    for(; i<s.length; ){
    	console.log(s.length);
    	if(s[i]==' '&& str==''){
    		i++;
    	}
    	else if(s[i]==' ' && str!=''){
    		arr.push(str);
    		str='';
    		i++;

    	}
    	else if ((i+1)==s.length && str!=' '){
    		str+=s[i];
    		arr.push(str);
    		i++;
    	}
    	else{
    		str+=s[i];

    		i++;
    	}
    }
    for(let i=arr.length-1; i>=0; i--){
    	if(i!=0){
    		finalArr+=arr[i];
    		finalArr+=' ';
    	}
    	else{
    		finalArr+=arr[i];
    	}
    }
    console.log(arr);
    return finalArr;
};
console.log(reverseWords(" asdasd df f"
));