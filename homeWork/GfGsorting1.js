/* Print the elements of an array in the decreasing
 frequency if 2 numbers have same frequency then
 print the one which came first. */
 var frq=[];
 var arr= [2, 5, 2, 6, 1, 9, 5, 8, 8, 8];
 for(var i=0; i < arr.length; i++){
  frq[arr[i]]=1;
  for(var j=i+1; j < arr.length; j++){

  if(arr[i]===arr[j]){   
   frq[arr[i]]++;
   arr.splice(j,1);
   j--;
  } 

 } 
}

var arr1=[];
var max;
var positionMax;
 for(var i=0; i < frq.length; i++){

  max=0;
  positionMax=0;
  for(var j=0; j < frq.length; j++){
   if(max<frq[arr[j]]){
     max=frq[arr[j]];
     positionMax=arr[j];
    }}  
   
   for(var k=0; k<max; k++){
    arr1.push(positionMax);
   }   
   frq[positionMax]=0;
  }

console.log(arr1); 
// Ovo ne radi za velike verednosti i negativne brojeve

