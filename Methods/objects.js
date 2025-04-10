//Assesement method(join)
let name = {name:"anuja"}
let age = {age:23}
let phno = {phno:9566578974}
Object.assign(name,age,phno);
console.log(name);
//key method (it takes only key)
let obj = {name:"anuja",age:23,phno:9566578974};
console.log(Object.keys(obj));
//values method (it takes only values)
let val = {name:"anuja",age:23,ph:9566578974};
console.log(Object.values(val));
//entries (it takes separate keys values)
let entries = {name:"anuja",age:23,ph:9566578974};
console.log(Object.entries(entries));