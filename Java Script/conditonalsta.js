//conditional statement

//if statement
let mode="dark";
let color;

if(mode==="dark"){
    color="black";
}

if(mode==="light"){
    color="white";
}

console.log(color);

//if-else statement

let num=21;

if(num%2==0){
    console.log("The number is even")
} else{
    console.log("The number is odd")
}


//else-if statement

let number=15;

if(number>10){
    console.log("Number is the greater than 10");
} else if(number<10){
    console.log("Number is less than 10");
} else{
    console.log("Number is equal to 10");
}

//Ternary operator

let age=17;
let result= age>=18 ? "adult":"notadult";
console.log(result)