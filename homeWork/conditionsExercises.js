/* Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”. */
var a=true;
if(typeof a === "number"){
 if(a%2===0){
  console.log(a+"/2="+a/2);
 }
 else console.log("X");
}else console.log("not a number");
/* Write a conditional statement to find the largest of five numbers. Display the result in the console. */
//SELECTION SORT
var numbers=[51, -10, -6 , 0 , 11,10,10,10];
var help ,i ,j;
var max,positionMax;

for( i=0; i< numbers.length; i++){
 max=numbers[i];
 positionMax=i;
 for( j=i+1; j< numbers.length; j++){
  if(numbers[j]>max) {
   max=numbers[j];
   positionMax=j;
  }}
numbers[positionMax]=numbers[i];
numbers[i]=max;
}
console.log(numbers);