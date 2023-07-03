// function sum(a,b){
//     return a+b;
// }
// console.log("1)sum of two numbers is:", sum(45,55));
// //second question
// function seconds(min){
//     return min*60;
// }
// console.log("2)number of seconds in 60 minutes is:",seconds(60));
// //question 3
// function increment(num){
//     return num+1
// }
// console.log( "3)increment of the number 9 is:",increment(9));
// //4 question
// function days(age){
//     return age*365;
// }
// console.log("4)The result of 20 years age in to days is:",days(20));
// //5 question
// function power(v,i){
//     return (v*i)
// }
// console.log( "5)power is multiplication of voltage and current :",power(9,0.9));
// //7 question
// function isten(a,b){
// return a==10||b==10||a+b==10;
// }
// console.log("7)returns true if any one of a or b is ten:",isten(10,6));
// console.log("7)returns true if any one of a or b is ten:",isten(7,6));
// console.log("7)returns true if sum of a and b is ten:",isten(3,7));
// console.log("7)returns true if sum of a and b is ten:",isten(7,7));
// //20 question
// function type(a){
//     return typeof(a)
// }
// console.log("20)Type of a is:",type(10));
// console.log("20)Type of a is:",type("sheshank"));
// console.log("20)Type of a is:",type(true));
// console.log("20)Type of a is:",type(null));
// console.log("20)Type of a is:",type());
// console.log("20)Type of a is:",type([0,1,2]));
let count=0;
function counting(){
     var a="hello";
    for(i=0;a[i]!=undefined;i++){
        count+=1;
        return count;
    }
}
console.log(counting());




