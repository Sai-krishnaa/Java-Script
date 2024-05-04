//Loops are used to execute a piece of code again and again


//FOR LOOP

let sum=0;
let n=6;
for(let i=1;i<=n;i++){
    sum=sum+i;
}
console.log("Sum=",sum);
console.log("Loop has ended");


//WHILE LOOP

let i=1;
while(i<=10){
    console.log("Sai krishna",i);
    i++;
}


//DO WHILE LOOP

let count=5;
do{
    console.log("Java Sript");
    i++;
} while(i<=10);


//FOR-OF LOOP

let str="Java Script";
let size=0;

for(let val of str){
    console.log("Val=",val);
    size++;
}

console.log("String size is=",size);


//FOR-IN LOOP

let student={
    name:"Sai krishna",
    age:20,
    cgpa:8,
    isPass:true,
};

for(let key in student){
    console.log("Key=",key,"Value=",student[key]);
}

