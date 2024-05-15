//strings
 let str="java script";
 letnewstr= str.toUpperCase(); //string methods 
 console.log(str);
 console.log(letnewstr); 
 
 //Template Literals

 let specialstring= `This is a template literal`;
 console.log(typeof specialstring);

 //example of template literals

 let obj={
   item : "Pen",
   price :50,
 } 
 let output= `The cost of ${obj.item} is ${obj.price} rupees`;
 console.log(output);      

 //string interpolation

/*String interpolation is to crate string by 
doing substitution of place holders */

 let sstr=`This is a string interpolation is ${1+2+3+4+5}`;
 console.log(sstr);   

//string methods 

//str.slice

let string= "123456789";
console.log(string.slice(1,4));

//str1.concat(str2)

let str1= "Java";
let str2= "Script";

let result=str1.concat(str2);
console.log(str1);

// str.replace
let str3= "Sai";
console.log(str3.replaceAll("S" , "U"));
