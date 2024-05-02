/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
	let i=0; 
	let previous="";
	for(let j=0; j<typed.length; j++){
		if(typed[j]==name[i]){
			previous=name[i];
			i++;
		}
		else{
			if(typed[j]!=previous){
				return false;
			}
		}
	}
	console.log(i)
	return (i!=name.length)?false:true;
};
console.log(isLongPressedName("alex","aaleex"));