/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
	let absent=0;
	for(let i=0; i<s.length; i++){
		let next=s[i+1];
		let nextOne=s[i+2];
		if(absent==2){
			return false;
		}
		else if(s[i]=='A'){
			absent++;
		}
		else if(s[i]=='L' && next=='L' && nextOne=='L'){
			return false;
		}
	}
	return absent==2?false:true;};
console.log(checkRecord("AA"));

/* let absent=0;
    let late=0;
    let previous='';
    let beenLate=false;
    for(let i=0; i<s.length;i++){
    	if(s[i]=='A'){
    		late=0;
    		absent++;
    	}
    	else if(s[i]=='L' && late==0){
    		late++;
    	}
    	else if(s[i]=='L' && late==2){
    		beenLate=true;
    		break;
    	}
    	else if(s[i]=='L' && previous=='L'){
    		late++;
    	}

    	else{
    		late=0;
    	}
    	previous=s[i];
    }
    console.log(absent,beenLate);
    if(absent>=2 || beenLate){
    	return false;
    }
    return true;*/