var con = require("./constants.js")

console.log("Welcome to Employee Wage computation");
 
let emp_check = Math.floor(Math.random() * 10) % 2;

if (emp_check == con.is_Absent){
    console.log("Employee is absent");
}
else{
    console.log("Employee is present");
}

let myMap = new Map();
var empwage = 0;
var empwage1 = 0;
var time = 0;
var day = 0;
while(time <= con.time && day < con.days){
    const empcheck = Math.floor(Math.random() * 10) % 3;
    let emphr = 0;

    switch(empcheck){
        case 0: emphr = con.fulltime;   //fulltime
                break;
        case 1: emphr = con.parttime;   //partime
                break;
        default: emphr = 0;
                break;
    }
    day++;
    time += emphr;
    empwage = emphr * con.wageperhr; //time * wage per hr
    empwage1 += empwage;

    myMap.set(day, empwage);        //Store the Day and the Daily Wage using map() 
}
myMap.set("Total wage is",empwage1);     // total wage using map()
console.log("Employee wage is",myMap);
