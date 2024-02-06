
let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


// let myTimeStamp = new Date.now() Give time in ms

// Math.floor((Date.now())/1000) Convert Date in ms into second

// Get method of Date Objects

console.log(myDate.toLocaleString('default',{
    weekday:"long"
}))