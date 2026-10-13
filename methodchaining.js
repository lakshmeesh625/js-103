let name = "james Bond";

//first method to make the first letter of the name uppercase and the rest lowercase

let firstLetter = name.charAt(0).toUpperCase();
let restOfName = name.slice(1).toLowerCase();
let formattedName = firstLetter + restOfName;

console.log(formattedName);



//second method to make the first letter of the name uppercase and the rest lowercase

let formattedName2 = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

console.log(formattedName2);

