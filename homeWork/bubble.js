var numbers=[51, -10, -6 , 0 , 11,10,10,10];
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
console.log(numbers);