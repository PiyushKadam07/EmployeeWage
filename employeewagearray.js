var con = require("./constants.js")
console.log("Welcome to Employee Wage computation");

let empWage = new Array();
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
    empwage = emphr * con.wageperhr; //time * wage per hr
    empWage.push(empwage);
}

let empwage1 = empWage.reduce((sum, current) => sum + current, 0);   // total Wage using Array forEach or reduce method
console.log("DAY:",day,"EmpHr:",time,"EmpWage:",empwage1);

let lengths = empWage.map( function(val, index) {                    // Day along with Daily Wage using Array map helper function            
    return {Day:index + 1, Wage:val};
})
console.log("Day along with Daily Wage",lengths);

let Wages = lengths.filter(item => item.Wage == 160);  // Days when Full time wage of 160 were earned using filter function
console.log("Days when Full time wage of 160 were earned",Wages);

let findfulltime = lengths.find( function(val, index) {         // first occurrence when Full Time Wage was earned using find function             
    if ( val.Wage == 160 ) {
    return index 
    }
})
console.log("First occurrence when Full Time Wage was earned",findfulltime);

let checkfulltime = Wages.some(item => item.Wage == 160)     //  Every Element of Full Time Wage is truly holding Full time wage
console.log("Every Element of Full Time Wage is truly holding Full time wage:",checkfulltime);

let checkparttime = lengths.some(item => item.Wage == 80)         //check if there is any Part Time Wage
console.log("Checking if there is any Part Time Wage:",checkparttime);

let checkempworked = lengths.filter(item => item.Wage == 0);      // number of days the Employee Worked  
console.log("Employee worked for",con.days-checkempworked.length,"days"); 