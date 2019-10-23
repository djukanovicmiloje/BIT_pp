//Write a program that calculates the maximum of two given numbers.
function max(p1, p2) {
  if (p1 > p2) {
    return p1;
  } else return p2;
}
console.log(max(12, 15));
//Write a program that checks if a given number is odd.
function isOdd(n) {
  if (n % 2 === 0) {
    return "its even";
  } else return "its odd";
}
console.log(isOdd(4));

//Write a program that checks if a given number is a three digit long number.
function is3dig(n) {
  if (99 < n && n < 1001) return true;
  else return false;
}
console.log(is3dig(40));
//Write a program that calculates an arithmetic mean of four numbers.
function arithmeticMean(arr) {
  var mean = 0;
  for (var i = 0; i < arr.length; i++) {
    mean += arr[i];
  }
  mean /= arr.length;
  return mean;
}
var N = [1, 2, 3, 4];
console.log(arithmeticMean(N));
//Write a program that draws a square of a given size.
//For example,  if the size of square is 5 the program should draw:
function square(n) {
  var Square = "";
  var red1 = "";
  var red2 = "";
  for (var i = 0; i < n; i++) {
    red1 += "*";
    if (i === 0 || i === n - 1) red2 += "*";
    else red2 += " ";
  }
  for (var i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) Square += red1 + "\n";
    else Square += red2 + "\n";
  }
  return Square;
}
console.log(square(10));
//Write a program that draws a horizontal chart representing three given values.
//For example, if values are 5, 3, and 7, the program should draw:
function plot() {
  arguments.length;
  var chart = "";
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i]; j++) chart += "*";
    chart += "\n";
  }
  return chart;
}
console.log(plot(8, 5, 6, 10, 20));
//Write a program that calculates a number of digits of a given number.
function numberOfDigits(N) {
  var n = 0;
  while (N >= 1) {
    N /= 10;
    n++;
  }
  return n;
}
console.log(numberOfDigits(1));
//Write a program that calculates a number of appearances of a given number in a given array.
function numberOfAppearances(n, arr) {
  var count = 0;
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === n) count++;
  }
  return count;
}
var N = [1, 1, 1, 1, 5];
console.log(numberOfAppearances(5, N));
//Write a program that calculates the sum of odd elements of a given array.
function sumOfOdd(arr) {
  sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) sum += arr[i];
  }
  return sum;
}
var N = [1, 1, 1, 1, 5, 8];
console.log(sumOfOdd(N));
//Write a program that calculates the number of appearances of a letter a in a given string.
//Modify the program so it calculates the number of both letters a and A.
function numberOfLetter(string) {
  number = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "A" || string[i] === "a") number++;
  }
  return number;
}
var ime = "Aa";
console.log(numberOfLetter(ime));
//Write a program that concatenates a given string given number of times. For example,
// if “abc” and 4 are given values, the program prints out abcabcabcabc.
function nConc(string, n) {
  var newString = "";
  for (var i = 0; i < n; i++) {
    newString += string;
  }
  return newString;
}
console.log(nConc("X", 3));
