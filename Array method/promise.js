//all
let p1 = Promise.resolve(2*2);
let p2 = Promise.resolve(2/23);
Promise.all([p1,p2]).then((result)=>console.log(result));
//race
let p3 = new Promise((resolve) => setTimeout(resolve,100,"three"));
let p4 = new Promise((resolve) => setTimeout(resolve,1300,"four"));
let p5 = new Promise((resolve) => setTimeout(resolve,400,"five"))
Promise.race([p3,p4,p5]).then((Output) => console.log(Output));