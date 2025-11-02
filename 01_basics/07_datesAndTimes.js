//dates

let myDate=new Date()
console.log(myDate.toString());  
console.log(myDate.toDateString()); //Sun Nov 02 2025
console.log(myDate.toISOString()); //2025-11-02T11:31:26.945Z
console.log(myDate.toTimeString());

// to know the type of date
console.log(typeof myDate); //Object
let myCreatedDate=new Date(2023,0,23,6,9);
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString());//1/23/2023, 6:09:00 AM
let mySecDate=new Date("01-14-2023");
console.log(mySecDate.toLocaleString());// 1/14/2023, 12:00:00 AM

let myTimeStamp=Date.now()
console.log(myTimeStamp);// o/p in ms
console.log(myCreatedDate.getTime()); //?
console.log(Math.floor(Date.now()/1000)); // for sec divide by 1000 then floor

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})
