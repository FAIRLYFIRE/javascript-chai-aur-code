// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 7,4, 5, 7) // Months start from index 0
// let myCreatedDate = new Date("2013-3-23") //yyyy-mm-dd
let myCreatedDate = new Date("2-6-2006") //mm-dd-yyyy
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //Time is in miliseconds 
// console.log(myCreatedDate.getTime());//now we can compare time
// console.log(Math.floor(myTimeStamp/1000)); //convert miliseconds to seconds and remove decimals

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

edittedDate = newDate.toLocaleString('default', {
    // weekday: "short",
    timeZone: 'GMT',
    dateStyle: 'full',
})

console.log(edittedDate);