//abs methods
console.log(Math.abs(-6));
let array = [-1,-2,-3,-4,-5];
let absarray = array.map((num) => Math.abs(num));
console.log(absarray)
//ceil
let num = [3.4,5.4,2.1,3.5];
let ceilnum = num.map((n) => Math.ceil(n))
console.log(ceilnum)
//max
let maxnum = Math.max(10,20,30,40,50);
console.log(maxnum);
console.log(Math.max(1,2,3,4));
//random
let randomnum = Math.random();
console.log(randomnum)

let randomarr = [2,3,4,5,6,7];
let randamnum = randomarr[Math.floor(Math.random()*randomarr.length)] ;
console.log(randamnum)
