//for each
const coding=["js","ruby","java","python","cpp"]
coding.forEach( function (val){// just dont write name of fn
    console.log(val);
})

//for Each in arrow fn
coding.forEach( (item)=>{
    console.log(item);
} )

//printMe
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

//Arrow fn
coding.forEach( (item, index, arr)=>{
    console.log(item,index,arr);
})

// very cmmon opr i.e Object in Array
const mycoding=[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
mycoding.forEach((item) =>{
    console.log(item.languageName);
})























