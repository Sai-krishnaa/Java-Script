//Prompt the user to enter their fullname . Generate a username for them based on the input start username with @, followed by their fullname and ending with full name lenght 

let fullname=prompt("Enter your Fullname without spaces");
let username= "@" + fullname +fullname.length;
console.log("Your username=",username);
