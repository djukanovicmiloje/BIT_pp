"use strict"
//1
function countVowels(string) {
    var result = 0;
    for (var i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
                result++;
        }
    }
    return result;
}
console.log(countVowels("AEae"));
//2
function alternatingCombine(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
    }
    return newArr;
}
letters = ["a", "b", "c"];
numbers = [1, 2, 3];
console.log(alternatingCombine(letters, numbers));
//3
function rotateByK(arr, k) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (i + k < arr.length) newArr[i] = arr[i + k];
        else newArr[i] = arr[i - (arr.length - k)];
    }
    return newArr;
}
console.log(rotateByK([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
//4
function numberToArray(number) {
    var arr = [];
    while (number !== 0) {
        arr.push(number % 10);
        number = parseInt(number / 10);
    }
    return arr;
}
console.log(numberToArray(123456));
//5
function printMultiplicationTable(N) {
    var table = "";
    for (var i = 1; i <= N; i++) {
        for (var j = 1; j <= N; j++) {
            table += i * j + " ";
        }
        table += "\n";
    }
    console.log(table);
}
printMultiplicationTable(10);

//6
function centigradeToFahrenheit(cen) {
    return cen * 1.8 + 32;
}
console.log(centigradeToFahrenheit(-50));
//7
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }
    return max;
}
console.log(findMax([1, 2, 3, 4, 5, 6, 7]));
//8
function extremum(arr) {
    var min = arr[0];
    var max = arr[0];
    var extr = [];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
        if (min > arr[i]) min = arr[i];
    }
    extr.push(min);
    extr.push(max);
    return extr;
}
console.log(extremum([5, 1, 2, 3, 4, 5, 6, 10, 7, 8]));
//9
function median(arr) {
    function sort(numbers) {
        var swapped = true;
        var help;
        while (true) {
            swapped = false;
            for (var i = 0; i < numbers.length - 1; i++) {
                if (numbers[i] > numbers[i + 1]) {
                    help = numbers[i];
                    numbers[i] = numbers[i + 1];
                    numbers[i + 1] = help;
                    swapped = true;
                }
            }
            if (swapped === false) break;
        }
    }
    sort(arr);
    if (arr.length % 2 === 1) return arr[arr.length / 2];
    else return (arr[parseInt((arr.length - 1) / 2)] + arr[parseInt((arr.length - 1) / 2) + 1]) / 2;
}
console.log(median([1, 2, 3, 10, 5, 7, 6, 8, 9, 4]));
//10
function mostFrequent(arr) {
    var frq = [];
    for (var i = 0; i < arr.length; i++) frq[i] = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
            frq[i][0] = arr[i];
            frq[i][1] = 0;
            for (var j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    frq[i][1]++;
                    if (i !== j) arr[j] = null;
                }
            }
        }
    }

    var maxIndex;
    var maxFrq = frq[0][1];

    for (var i = 1; i < frq.length; i++) {
        if (frq[i][1] > maxFrq) {
            maxIndex = i;
            maxFrq = frq[i][1];
        }
    }

    return frq[maxIndex][0];
}
console.log(mostFrequent([1, 2, 3, 3, 3, 4, 4, 8, 8, 8, 8, 8, 8, 8, 8, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]));
//11
function firstMiddleLast(arr) {
    if (arr.length === 0) return [];
    if (arr.length % 2 === 1) return [arr[0], arr[parseInt(arr.length / 2)], arr[arr.length - 1]];
    else return [arr[0], arr[arr.length - 1]];
}
console.log(firstMiddleLast[1, 3])
//12
function average() {
    var sum = 0;
    var test = [1, 2, 3];
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum / arguments.length;
}
console.log(average(1, 2, 3, 5, 4));
//
function biggerThanAverage(arr) {
    var average = 0;
    for (var i = 0; i < arr.length; i++) {
        average += arr[i];
    }
    average /= arr.length;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) newArr.push(arr[i]);
    }
    return newArr;
}
console.log(biggerThanAverage([1, 2, 3, 10, 5, 7, 6, 8, 9, 4]));
//
function BMI(height, weight) {
    var bmi = weight / (height * height);
    if (bmi < 5) return "Starvation";
    if (bmi < 17.5) return "Anorexic";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Ideal";
    if (bmi < 30) return "Overweight";
    if (bmi < 40) return "Obese";
    if (bmi >= 40) return "Morbidly obese";
}
//
function printFrame() {
    var framed = "";
    var top = "";
    var line = [];
    var maxLength = arguments[0].length;
    for (var i = 0; i < arguments.length; i++) { if (maxLength < arguments[i].length) { maxLength = arguments[i].length; } }
    for (var i = 0; i < maxLength + 4; i++) top += "*";
    framed += top + "\n"
    for (var j = 0; j < arguments.length; j++) {
        line[j] = "";
        i = 0;
        while (line[j].length != maxLength + 4) {
            if (i === 0 || i === (maxLength + 3)) line[j] += "*";
            if (i === 1) line[j] += " ";
            if (i === 2) {
                line[j] += arguments[j];
            }
            if (i > 2) line[j] += " ";
            i++;
        }
        framed += line[j] + "\n";
    }
    framed += top;
    console.log(framed);
}
printFrame("Hello", "World", "in", "a", "frame");