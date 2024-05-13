//Print all even numbers from 0 to 100

for(let num=0;num<=100;num++){
    if(num %2===0){
        console.log("Num=",num);
    }
}


// Get user to input a number uisng prompt("Enter a number:"). Check if the number is even or odd
let n= prompt("Enter a number")

if(n %2===0){
    console.log(n,"The number is even");
} else{
    console.log(n,"The number is not even");
}