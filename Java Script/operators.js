// operators and conditional statements

// Arithmetic Operators 

let a=5;
let b=10;

console.log("a=",a ,"b=",b);
console.log("a+b=",a+b);//Addition
console.log("a-b=",a-b);//Subtraction
console.log("a*b=",a*b);//Multiplication
console.log("a/b=",a/b);//Divison
console.log("a%b=",a%b);//Moduls
console.log("a**b=",a**b);//Exponential
// unary operator
a++;//increment
b--;//decrement
console.log("a=",a);
console.log("b=",b);


// Assignment operator
let c=4;
let d=5;

c+=4;//c=c+4 
d-=3;//d=d-3
console.log("c=",c);
console.log("d=",d);

//Comparison operator
let e=5;
let f=2;
let g="6";

console.log("5==6",e==f);//Equal to(==)
console.log("5!=2",e!=f);//Not equal to(!=)

console.log("e===g",e===g);//Equal to and its also checks the data type(===)
console.log("e!==g",e!==g);//Not equal to and its also check the data type(!==)

console.log("e>f",e>f);
console.log("e>=f",e>=f);
console.log("e<f",e<f);
console.log("e<=f",e<=f);

//Logical operators
let h=6;
let i=5;

let cond1=h>i;
let cond2=h===5 ;

console.log("cond1 && cond2",cond1 && cond2);//Logical AND(&&)

console.log("cond1||cond2",cond1||cond2);//Logical OR(||)
 
console.log("!(h<i)",!(h<i));//Logical Not(!)
