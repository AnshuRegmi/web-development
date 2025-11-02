let x = "5";
if (x == 5) {
  console.log("inside if");
}

let day = "sunday";
let month = "december";

if (day == "sunday" || month == "december") {
  console.log("The class day");
} else {
  console.log("Not a class day");
}

let day1 = prompt("Enter the day");
if (day1 == "sunday" || day1 == "wednesday") {
  console.log("webdev class");
} else if (day1 == "saturday") {
  console.log("holiday");
} else {
  console.log("other class");
}

for(let i=0; i<5; i++ ){
  console.log("the value of i is",i);
}

for(let i=1; i<=10; i++ ){
  console.log("2 x",i,"=",2*i);
}
