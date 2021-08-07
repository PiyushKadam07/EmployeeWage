var con = require("./constants.js")

console.log("Welcome to Employee Wage computation");

let emp_check = Math.floor(Math.random() * 10) % 2;

if (emp_check == con.is_Absent){
    console.log("Employee is absent");
}
else{
    console.log("Employee is present");
}