'use strict'
// 2
console.log("Shurko")    ;

//3
 let a,b;
a=2;
b=3;
alert(`${a} ${b}`);
b=a;
alert(b);
//4
let pbj = new Object{
    str: "hello";
    num:  12;
    bool:  true; //4>1

    und: undefined;
    nl : null;
 
console.log(typeof pbj.str);
console.log(typeof pbj.num);
console.log(typeof pbj.bool);
console.log(typeof pbj.und);
console.log(typeof pbj.nl)
};
// 5
 let isAdult = confirm("is 18?");
 console.log(isAdult);
// 6
let Name, Lname, Party, Year;
Year=2005;
let married = confirm("married?");
Name = "Volodymy";
Lname = "Shurko";
Party ="JS Fundamentals";

console.log( typeof Year); 
console.log( typeof married); 
console.log( typeof Name); 
console.log( typeof Lname); 
console.log( typeof Party); 

//7

let login = prompt("login?");
let email = prompt('email?');
let pass = prompt("pass?");
alert (`"Dear" ${login}", your "${email}", your password is"${pass}`);

8

let ind=prompt("where you want check seconds? '1' in hour '2' in days '3' in month");
let sec, hour, day, mnth;
if(ind = 1){
    hour=prompt("in how many hours you want check seconds?");
         sec = hour*60;
         alert(`"in ${hour}hour is ${sec} seconds" `);
} else if(ind = 2){
    day=prompt("in how many days you want check seconds?");
         day = (day*24)*60;
         alert(`"in ${day}is ${sec} seconds" `);
}else{
    mnth=prompt("in how many months you want check seconds?");
        sec = ((mnth*30)*24)*60;
        alert(`"in ${mnth} month is ${sec} seconds" `);
};
