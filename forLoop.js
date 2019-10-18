for (var i = 1; i <= 100; i++) {



    if (i % 3 === 0) {
        if (i % 5 === 0) { console.log("FizzBuzz"); }
        else console.log("Fizz");
    }

    else if (i % 5 === 0) console.log("Buzz")
    else console.log(i);




}


/*
var Grades = [["David", 80], ["Marko", 77], ["Dany", 55], ["John", 95], ["Thomas", 68]];
var avg = 0;
for (var i = 0; i < Grades.length; i++) {
    avg += Grades[i][1] / Grades.length;
}
for (var i = 0; i < Grades.length; i++) {
    if (Grades[i][1] > .9 * avg) { Grades[i].push("A"); }
    else if (Grades[i][1] > .8 * avg) { Grades[i].push("B"); }
    else if (Grades[i][1] > .7 * avg) { Grades[i].push("C"); }
    else if (Grades[i][1] > .6 * avg) { Grades[i].push("D"); }
    else if (Grades[i][1] > .6 * avg) { Grades[i].push("C"); }
    else Grades[i].push("FAILED");
    console.log(Grades[i]);
}
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27, 65, 65, 65, 65]
];

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; i % 2 === 0 ? j++ : j += 2) {
        console.log(a[i][j]);
    }
}


for (var i = 0; i < Grades.length; i++) {
    avg += Grades[i][1] / Grades.length;
}
for (var i = 0; i < Grades.length; i++) {
    if (Grades[i][1] > .9 * avg) { Grades[i].push("A"); }
    else if (Grades[i][1] > .8 * avg) { Grades[i].push("B"); }
    else if (Grades[i][1] > .7 * avg) { Grades[i].push("C"); }
    else if (Grades[i][1] > .6 * avg) { Grades[i].push("D"); }
    else if (Grades[i][1] > .6 * avg) { Grades[i].push("C"); }
    else Grades[i].push("FAILED");
    console.log(Grades[i]);
}
 */