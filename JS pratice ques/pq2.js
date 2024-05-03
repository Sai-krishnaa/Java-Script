//Get user to input a number uisng prompt("Enter a number:"). Check if the number is a multiple  of 5 or not

let num= prompt("Enter a number");

if(num%5==0){
    console.log(num,"is a Multiple of 5");
} else{
    console.log(num,"is not a Multiple of 5");
}

/*Write a code which can give grades to students according to their scores
. 80-100,A
. 70-89,B
. 60-69,C
. 50-59,D
. 0-49,F
*/

let score=75;
let grade;

if(score>=90 && score<=100){
    grade="A";
} else if(score>=70 && score<=89){
    grade="B";
} else if(score>=60 && score<=69){
    grade="C";
} else if(score>=50 && score<=59){
    grade="D";
} else if(score>=0 && score<=49){
    grade="F";
}

console.log("According to your marks your grade is :",grade);

//Rewrite the above code where Get user to input a number uisng prompt("Enter your marks:"). Show the grade according to the score

let marks=prompt("Enter your marks");
let grades;

if(marks>=90 && marks<=100){
    grades="A";
} else if(marks>=70 && marks<=89){
    grades="B";
} else if(marks>=60 && marks<=69){
    grades="C";
} else if(marks>=50 && marks<=59){
    grades="D";
} else if(marks>=0 && marks<=49){
    grades="F";
}

console.log("According to your marks your grade is :",grades);

