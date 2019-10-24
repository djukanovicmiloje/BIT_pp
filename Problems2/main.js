//Write a function to check whether the `input` is a string or not.
function isString(string) {
    if (typeof (string) === "string") return true;
    else return false;
}
console.log(isString("dsadsd56"));
//Write a function to check whether a string is blank or not.
function isBlankString(string) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== " ") return false;
    }
    return true;
}
console.log(isBlankString(""));
//Write a function that concatenates a given string n times (default is 1).
function nConc(string, n = 1) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += string;
    }
    return result;
}
console.log(nConc("A"));
//Write a function to count the number of letter occurrences in a string.
function nOcc(string, c) {
    var result = 0;
    var pString = string.toLowerCase();
    var pC = c.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        if (pString[i] === pC) result++;
    }
    return result;
}
console.log(nOcc("AabbbbbaaA", "a"));
//Write a function to find the position of the first occurrence of a character in a string.
// The result should be in human numeration form.
// If there are no occurrences of the character, the function should return -1.
function positionOfFirst(string, c) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === c) return i + 1;
    }
    return -1;
}
console.log(positionOfFirst("bbbb", "a"));
//Write a function to find the position of the last occurrence of a character in a string.
// The result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.
function positionOfLast(string, c) {
    for (var i = (string.length - 1); i >= 0; i--) {
        if (string[i] === c) return i + 1;
    }
    return -1;
}
console.log(positionOfLast("baaaaaaa", "b"));
//Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.
function stringToArr(string) {
    var arr = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") arr[i] = null;
        else arr[i] = string[i];
    }
    return arr;
}
console.log(stringToArr("Vazi"));
//Write a function that accepts a number as a parameter and checks if the number is prime or not.
function isPrime(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(9));
// Write a function that replaces spaces in a string with provided separator.
// If separator is not provided, use “-” (dash) as the default separator.
function changeSeparator(string, separator) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") newString += separator;
        else newString += string[i];
    }
    return newString;
}
console.log(changeSeparator("X X X X X X", "+"));
//Write a function to get the first n characters and add “...” at the end of newly created string.
function shorten(string, n) {
    var newString = "";
    for (var i = 0; i < n; i++) {
        newString += string[i];
    }
    newString += "...";
    return newString;
}
console.log(shorten("123456789", 5))
// Write a function that converts an array of strings into an array of numbers.
// Filter out all non-numeric values.
function arrStringToNumber(arr) {
    var newArr = [];
    var number;
    for (var i = 0; i < arr.length; i++) {
        number = parseInt(arr[i]);
        if (!isNaN(number)) newArr.push(number);
    }
    return newArr;
}
console.log(arrStringToNumber(["1", "21", undefined, "42", "1e+3", Infinity]));
//Write a function to calculate how many years there are left until retirement based on the year of birth.
//Retirement for men is at age of 65 and for women at age of 60. 
//If someone is already retired, a proper message should be displayed.
function retirement(yearOfBirth, currentYear, sex) {
    var maleAge = 65;
    var femaleAge = 60;
    var age = currentYear - yearOfBirth;
    if (sex === "male") {
        if (age > maleAge) return "already retired";
        return "retiring in " + (maleAge - age) + " years";
    }
    if (sex === "female") {
        if (age > femaleAge) return "already retired";
        return "retiring in " + (femaleAge - age) + " years";
    }
    return 0;
}
console.log(retirement(1970, 2019, "female"));
//Write a function to humanize a number (formats a number to a human-readable string)
//with the correct suffix such as 1st, 2nd, 3rd or 4th.
function humanize(N) {
    if (N % 100 > 10 && N % 100 < 20) {
        return N + "th"
    }
    switch (N % 10) {
        case 1:
            return N + "st"
        case 2:
            return N + "nd"
        case 3:
            return N + "rd"
        default:
            return N + "th"
    }
}
console.log(humanize(11122));
//Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
function insertString(string, secondString, position = 0) {
    var part1 = "";
    var part2 = "";
    for (var i = 0; i < string.length; i++) {
        if (i < position) part1 += string[i];
        else part2 += string[i];
    }
    return part1 + secondString + part2;
}
console.log(insertString("My random string", "JS "))
//Write a program to join all elements of the array into a string skipping elements that are
//undefined, null, NaN or Infinity.
function skippingValues(arr) {
    var string = "";
    for (var i = 0; i < arr.length; i++) {
        if (!Number.isNaN(arr[i]) && !(arr[i] === undefined) && !(arr[i] === Infinity) && !(arr[i] === null)) {
            string += arr[i];
        }
    }
    return string;
}
console.log(skippingValues([NaN, 0, 15, false, -22, '', undefined, 47, "VAZI", null]));
//Write a program to filter out falsy values from the array.
function removeFalsy(arr) {
    var newArr = [];
    //for (var i = 0; i < arr.length; i++) newArr[i] = arr[i];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) newArr[newArr.length] = arr[i];
    }
    return newArr;
}
console.log(removeFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));
//Write a function that reverses a number. The result must be a number.
function reverseNumber(N) {
    var number = [];
    var reversed = 0;
    var i = 0;
    var multiplier = 1;
    while (N >= 1) {
        number[i] = N % 10;
        i++;
        N /= 10;
        N = parseInt(N);
    }
    for (var i = 0; i < number.length; i++) {
        reversed += number[number.length - 1 - i] * multiplier;
        multiplier *= 10;
    }
    return reversed;
}
console.log(reverseNumber(123456789));
//Write a function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array.
function lastN(arr, n = -1) {
    var newArr = [];

    for (var i = n; i > 0; i--) {
        newArr[newArr.length] = arr[arr.length - i];
    }
    if (n === -1) return arr[arr.length - 1];
    return newArr;
}
console.log(lastN([7, 9, 0, -2], 2))
//Write a function to create a specified number of elements with pre-filled numeric value array.
function fillArray(n, value = null) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = value;
    }
    return arr;
}
console.log(fillArray(5, "brale"));
//Write a function that says whether a number is perfect.
function isPerfect(N) {
    var sum = 0;
    for (var i = 1; i < N; i++) {
        if (N % i === 0) sum += i;
    }
    if (sum === N) return N + " is a perfect number.";
    else return N + " isn't a perfect number";
}
console.log(isPerfect(5));
//Write a function to find a word within a string.
function findWord(string, word) {
    numberOfOcc = 0;
    for (var i = 0; i < string.length; i++) {
        var counter = 0;
        if (string[i] === word[0]) {
            for (var j = 1; j < word.length; j++) {
                if (string[i + j] === word[j]) {
                    counter++;
                }
            }
        }
        if (counter === word.length - 1) numberOfOcc++;
    }
    return "'" + word + "' was found " + numberOfOcc + " times";
}
console.log(findWord('The quick brown fox fox fox fox', 'fox'))
//Write a function to hide email address.