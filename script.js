

let obj1 = {name : "Person1", age : 5};
let obj2 = {age : 5, name : "Person1"};

for(let key in obj1){

if(obj1[key] === obj2[key]){
    
    console.log(key + " has same value");
}else{
    
    console.log(key + " doesn't has same value")
}
}