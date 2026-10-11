

let isCustomerBanned = false;
let soup = "chicken noodle";
let crackers = true;
let reply;


if (isCustomerBanned) {
    reply = "Sorry, you are banned.";
}
else if (soup && crackers) {
    reply = "Yes, we have soup! and crackers.";
}
else if (soup && !crackers) {
    reply = "Sorry, we are out of crackers we have soup.";
}
else if (!soup && crackers) {
    reply = "Sorry, we are out of soup we have crackers.";
}
else {
    reply = "Sorry, we are out of soup and crackers.";
}


console.log(reply);





let testscore = 75;
let grade;



if (testscore >= 90 && testscore <= 100) {
    grade = "A";
}
else if (testscore >= 80 && testscore < 90) {
    grade = "B";
}
else if (testscore >= 70 && testscore < 80) {
    grade = "C";
}
else if (testscore >= 60 && testscore < 70) {
    grade = "D";
}

else if (testscore >= 0 && testscore < 60) {
    grade = "F";
}

console.log(grade);




