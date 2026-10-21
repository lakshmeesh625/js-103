let day = 1;


switch (day) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Invalid day")
        
        
}








// case 2
let marks = -88;
let grade;


switch (true) {
    case (marks > 85 && marks <= 100):
        grade = "A"
        break;
    case (marks <= 85 && marks > 60):
        grade = "B"
        break;
    case (marks > 35 && marks <= 60):
        grade = "C"
        break;
    case (marks >= 0 && marks <= 35):
        grade = "F"
        break;
    default:
        grade = "Invalid grade"

        
}


console.log(grade);

