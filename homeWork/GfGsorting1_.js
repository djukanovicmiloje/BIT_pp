// PREKO MATRICE
numbers=[2, 5, 2, 6, -1, 9999999, 5, 8, 8, 8];
//Prvo sortiram niz
var swapped=true;
var help;
while(true){
 swapped=false;
 for(var i=0; i < numbers.length-1; i++){
  if(numbers[i]>numbers[i+1]){
   help=numbers[i];
   numbers[i]=numbers[i+1];
   numbers[i+1]=help;
   swapped=true;
  }
 }
 if(swapped===false)break;
}
//Prvo moram da deklarisem matricu
var VF=[];// value and frq
for(var i=0; i<numbers.length; i++){
 VF[i]=new Array(2);//Ovo je deklarisalo matricu duzinax2
 VF[i][1]=1;
}
//Pravim matricu sa vrednostima i frekvencijom
var k=0;
for(var i=0; i < numbers.length; i++){
 
 VF[k][0]=numbers[i];
 if(numbers[i]===numbers[i+1]){
  VF[k][1]++;   
 }else k++;
}
/* for(var i=0; i<4; i++){
 console.log(VF[i]);
} */
//Sortiram matricu po frekvenciji


var swapped=true;
var help=[];
while(true){
 swapped=false;
 for(var i=0; i < k-1; i++){
  if(VF[i][1]>VF[i+1][1]){ 
   help=VF[i];
   VF[i]=VF[i+1];
   VF[i+1]=help;
   swapped=true;
  }
 }
 if(swapped===false)break;
}
//pakujem novi niz
var sorted=[]
for(var i=k-1; i!==0 ; i--){
  for(var j=0; j < VF[i][1]; j++){
   sorted.push(VF[i][0]);
  }
}
console.log(sorted);
