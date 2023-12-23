//605. Can Place Flowers
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    let i=0;
    if(flowerbed[i]==0 && flowerbed[i+1]!=1){
    	count++;
    	flowerbed[i]=1;
    }
    for(;i<flowerbed.length;){
    	if(flowerbed[i]==1){
    		if(flowerbed[i+1]==0 && flowerbed[i+2]==0){
    			if(flowerbed[i+3]==0){
    				count++;
    				flowerbed[i+2]=1;
    				i+=1;
    			}
    			else{
    				if((i+4)>=flowerbed.length && flowerbed[flowerbed.length-2]!=1){
    					if(flowerbed[i+3]!=1){
							count++;
    						flowerbed[i+2]=1;
    						i+=1;
    					}
    				}
    			}
    		}
    	}
    	i+=1;
    }
    console.log(flowerbed)
    return count==n;
};
console.log(canPlaceFlowers([0,0,1,0,0],2))