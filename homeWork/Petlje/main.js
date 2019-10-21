//https://docs.google.com/document/d/1Lpt9Kevfbg_Dq7M_eHphWSymB4XqdToD7o9-CXeH-M4/edit
//1
var e = 12 ;var a = [5, -4.2, 3, 7];
var ind = false;
for(var i=0; i<a.length; i++){
 if(a[i]===e){
  ind = true;
  break;
 }
}
if(ind) console.log("yes");
else console.log("no");
//2
var arr = [-3, 11, 5, 3.4, -8];
for(var i=0; i < arr.length; i++){
 if(arr[i] > 0) arr[i]*=2;
}
console.log(arr);
//3
var arr =  [4, 2, 2, -1, 6];
var min = arr[0];
var positionOfMin;
for(var i=1; i < arr.length; i++){
 if(min > arr[i]) {
  min = arr[i];
  positionOfMin=i;
}}
console.log(min, positionOfMin);
//4
var arr =  [4, 2, 2, -1, 6];
var min = arr[0];
var prevMin;
for(var i=1; i < arr.length; i++){
 if(min > arr[i]) {
  prevMin = min;
  min = arr[i];
 }else if(prevMin > arr[i]) prevMin = arr[i];
}
console.log(prevMin);
//5
var arr = [3, 11, -5, -3, 2];
var sum = 0;
for(var i = 0; i < arr.length; i++){
 if(arr[i] > 0) sum += arr[i];
}
console.log(sum);
//6
var arr = [2, 4, -2, 7, -2, 4, 2];
var ind = true;
for(var i = 0; i <= arr.length/2; i++){
 if(arr[i] !== arr[arr.length - 1 - i]){
  ind = false;
  break;
 }
}
if(ind) console.log("The array is symmetric.");
else console.log("The array isn't symmetric.");
//7
var arr_1 = [4, 5, 6, 2];
var arr_2 = [3, 8, 11, 9];
var arr_3 = [];
var j = 0;
for(var i = 0; i < arr_1.length; i++){
 arr_3[j] = arr_1[i];
 arr_3[++j] = arr_2[i];
 j++;
}
console.log(arr_3);
//8
var arr_1 = [4, 5, 6, 2];
var arr_2 = [3, 8, 11, 9];
var arr_3 = [];
for(var i = 0; i < arr_1.length + arr_2.length; i++){
 if(i < arr_1.length) arr_3[i] = arr_1[i]; 
 else arr_3[i] = arr_2[i - arr_1.length];
}
console.log(arr_3);
//9
var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var p;
for(var i = 0; i < a.length; i++){
  if(a[i] === e){
   for(var j = i; j < a.length - 1; j++){
    p = a[j];
    a[j] = a[j+1];
    a[j+1] = p;
   }
   i--;
   a.length--;
  }
}
console.log(a);
//10
var h;
var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
if(p > a.length) console.log("error");
else{
 a.length++;
 h = a[p];
 a[p] = e;
 for(var i = p+1; i < a.length; i++){
  hh = a[i];
  a[i] = h;
  h = hh;
 }
}
console.log(a);