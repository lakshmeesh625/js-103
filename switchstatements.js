let day = 1;


switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}




let day2 = "Monday";

switch (day2) {
    case "Monday":
        console.log("It's 2nd day of the week!");
        break;
    case "Tuesday":
        console.log("It's 3rd day of the week!");
        break;
    case "Wednesday":
        console.log("It's 4th day of the week!");
        break;
    case "Thursday":
        console.log("It's 5th day of the week!");
        break;
    case "Friday":
        console.log("It's 6th day of the week!");
        break;
    case "Saturday":
        console.log("It's 7th day of the week!");
        break;
    case "Sunday":
        console.log("It's 1st day of the week!");
        break;    default:
        console.log("Invalid day");
}



let mark = 85;
let grade;

switch (true) {
    case (mark >= 90&& mark <= 100):
        grade = "A";
        break;
    case (mark >= 80 && mark < 90):
        grade = "B";
        break;
    case (mark >= 70 && mark < 80):
        grade = "C";
        break;
    case (mark >= 60 && mark < 70):
        grade = "D";
        break;
    case (mark >= 0 && mark < 60):
        grade = "F";
        break;
    default:
        grade = "Invalid mark";
}

console.log(`The grade for mark ${mark} is: ${grade}`);