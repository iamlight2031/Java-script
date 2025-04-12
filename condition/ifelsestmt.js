//if else statement
let age = 23;
if(age>=23){
    console.log("you are an adult");
}
else{
    console.log("you are an minor");
}
//switch case
let day = 5;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
        default:
            console.log("no more days are found")
}

//more examp"le in switch case
let month = "march";
switch (month){
     case "jan":
     case "feb":
     case "apr":
         console.log("in this month there are 30 to 31 days");
         break;
     case "may":
     case "june":
     case "july":
         console.log("in this month there is 30 days");
         break;
         default:
             console.log("not a valid month");
 }
//for loop
for (let i=1;i<=5;i++){
    console.log("count:"+i);
}
//while loop
let count = 1;
while(count<5){
    console.log("count:"+count);
    count++;
}
//do while
let number = 0;
do{
    console.log("number:"+number);
    number ++;
}
while(number<5)