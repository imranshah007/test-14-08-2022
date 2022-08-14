const calculate=function(array) {
    var sum = 0, 
    num = array.length;
    while(num--){
     sum += Math.pow(array[num],2);
     } 
     return sum;
  }
 
   const ans=calculate([1,2,3,4,5]);
  console.log(ans);