
const obj={
    js:'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift"
}
for (const key in obj) {
    //console.log(obj[key]);
    console.log(`${key} shortcut of ${obj[key]}`); 
}

// does forin work in array
const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
   // console.log(key);// keys 0,1,2 printed
    console.log(programming[key]);
}

// does forin work in array
const map=new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('fr', "France")

for (const key in map) {
   console.log(key);  
}
// not work b/c map is not itertable




