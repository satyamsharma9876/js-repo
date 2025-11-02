//+++++++++++++(singleton)declaration of obj by constructor++++++++++++++++++++

//const tinderUser=new Object();// singleton obj
const tinderUser={}//non-singleton obj
tinderUser.id="12345"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
console.log(tinderUser);//{ id: '12345', name: 'sammy', isLoggedIn: false }

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"chaudhary"
        }
    }
}
console.log(regularUser.fullname);// { userfullname: { firstname: 'hitesh', lastname: 'chaudhary' } }
console.log(regularUser.fullname.userfullname.firstname); //hitesh

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
//const obj3={obj1,obj2};
//console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4={5:"a",6:"b"}
//const obj3=Object.assign({},obj1,obj2,obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//console.log(obj3);

const obj3={...obj1, ...obj2} //Spread Method
console.log(obj3);

// if the value is array of objects
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
     {
        id:1,
        email:"h@gmail.com"
    },
     {
        id:1,
        email:"h@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructer:'hitesh'
}
//course.courseInstructer...but code will not be clean
const{courseInstructer: instructor}=course
console.log(courseInstructer); //hitesh.if courseInstructor is a big name..give it as your choice name Instructor
console.log(instructor);//hitesh


