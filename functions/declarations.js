//declaration functions
function greet(name){
    return `Hello,${name}!`;
}
console.log(greet("alice"));
//functions expressions here we takes variable for the function
//annonyms function
const gree = function(name){
    return `Hello,${name}!`;
}
console.log(gree("ANUJA"));
//named function
const greetname = function sayhello(name){
    return `Hello,${name}!`;
};
console.log(greetname("ARULANUJA"));
//IMMEDIATE FUNCTION
(function(){
    console.log("life executed!");

})();
//ARROW FUNCTION
const greetArrow = (name)=>{
    `Hello,${name}!`;
};
//HIGH-ORDER FUNCTION
function processuser(user, callback){
    callback (user);

}
processuser("Mrng",(name)=>console.log(`Good,${name}!`));
//callback function
function fetchdata(callback){
    setTimeout(()=>callback("data received"),1000);
}
fetchdata((message) => {
    console.log(message);
});




