let min = 50;


if (min <= 50) {
    console.log(`The number is less than  or equaal to 50`)
}
else {
    console.log(`The number is above fifty`)
}
// else if


let marks = 75;
let grade;


if (marks <= 100 && marks > 80) {
    grade = "A"
}
else if (marks <= 80 && marks > 50) {
    grade = "B"
}
else if (marks <= 50 && marks > 25) {
    grade = "C"
}
else if (marks <= 25 && marks >= 0) {
    grade = "F"
}
else {
    grade = "invalid marks so no grade awrded"
}




let raining = false;
let sunny = true;



if (raining && sunny) {
    console.log(`Bring an umbrella and wear sunscreen`)

}
else if (raining && !sunny) {
    console.log(`Just bring an umbrella`)
}

else if (!raining && sunny) {
    console.log(`Just wear sunscreen`)
}
else {
    console.log(`Dont bother just come`)
}




