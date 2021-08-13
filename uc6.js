var con = require("./constants.js")
console.log("****** Welcome to EmployeeWage! ******");

var empwage = 0;
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
    empwage += emphr * con.wageperhr; //time * wage per hr
}
console.log("DAY:",day,"EmpHr:",time,"EmpWage:",empwage);