// let,const,var 
// var : Variable can be re-declared & updated. A global scope variable.
// let : Variable cannot be re-declared but can be updated. A block scope variable.
// const : Variable cannot be re-declared or updated. A block scope variable.

// currently let and const are widely used 

const PI=3.14;
console.log(PI);

let a;
a=10;
console.log(a);

{
    let a=5;
    console.log(a); //block
}

