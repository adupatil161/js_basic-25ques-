
/*  question 1
var age = prompt("please enter your age");
if(age < 18){
    console.log("you are minor");
}
else if(age > 18 && age < 60){
    console.log("you are an adult");
}
else{
    console.log("you are senior citizen");
}

*/




/* Question 2
 var num1=Number(prompt("enter first number"));
 var num2=Number(prompt("enter second number"));

 var add= num1+num2;

 if(add % 2 === 0){
    console.log("even sum")
 }
 else{
    console.log("odd sum")
 }

 */
 





 /* Question 3
 var char= prompt("enter a character");
 if(char.length === 1){
    if( char >= 'a' && char <= 'z'){
        console.log("lower case");
    }
    else if(char >= 'A' && char <= 'Z'){
        console.log("upper case");
    }
    else{
        console.log("neither");
    }
 }

 */






 /* Question 4
 var num1=Number(prompt("enter first number:"))
 var num2=Number(prompt("enter second number"))
 var num3=Number(prompt("enter third number"))

 if(num1 >= num2 &&  num1 >= num3){
    console.log(num1)
 }
 else if(num2 >= num1 && num2 >= num3){
    console.log(num2)
 }
 else{
    console.log(num3)
 }

 */







 /* Question 5
 var year=prompt("please enter year:")

 year=parseInt(year);
 if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log("its leap year")
 }
 else{
    console.log("its not leap year")
 }

 */







/* Question 6 
 var num1=Number(prompt("enter a number:"))
 var num2=Number(prompt("enter a number 2:"))

 var add = num1+num2;
 console.log("addition is:",add);
 var sub=num1-num2;
 console.log("substraction is:",sub);
 var mul=num1*num2;
 console.log("multiplication is:",mul)
 var div=num1/num2;
 console.log("divison is:",div)

 */






 /* question 7
 var num=Number(prompt("enter a number"))
 if(num > 0){
   console.log("it is a positive number");
 }

 else if(num < 0){
   console.log("number is negative");
 }

 else{
   console.log("it is zero");
 }

 */









 /* Question 8
 let name=prompt("please enter your name:")
 let time=prompt("please enter time in HH:MM format")
if (/^([01]\d|2[0-3]):([0-5]\d)$/.test(time)) {
    let [hours] = time.split(":").map(Number);
    let greeting = "";
   if( hours > 5 && hours < 12){
      greeting="good morning";
   }
   else if(hours >= 12 && hours <17 ){
      greeting="good afternoon";
   }
    else if (hours > 17 && hours < 21){
      greeting="good evening";
    }

    else{
      greeting="good night";
    }

    alert(`${greeting}, ${name}`);
   }
   else{
      alert("you entered invalid format.please use proper format.")
   }

   */









   /* question 9
   var color=prompt("please enter a color(red,green,yellow):");

   if (color === "red"){
      alert("stop!!!")
   }

   else if(color === "yellow"){
      alert("get ready!!!")
   }

   else if(color ==="green"){
      alert("goooo")
   }

   else{
      alert("enter appropriate color")
   }
*/










/* question 10
var num =parseInt(prompt("enter a number:"))
for( let i=1;i <=10 ;i++){
   console.log(`${num} x ${i} = ${num * i}`)
}

*/






/* question 11
var marks=Number(prompt("enter your marks:"))
if(marks > 90 && marks <= 100){
   alert(" GRADE A")
}
else if(marks > 80 && marks <= 90){
   alert("GRADE B")
}

else if(marks > 70 && marks <= 80){
   alert("GRADE C")
}

else if(marks > 60 && marks <= 70){
   alert("GRADE D")
}
else if (marks <= 60){
   alert(" GRADE F")
}


else{
   alert("dance")
}

*/









/* question 12
const username="aditi16";
const password ="adu161";

const user=prompt("please enter your username:");
const pass = prompt("please enter your password");

if( username == user && password == pass){
   alert("login successful!!!")
}
else{
   alert("invalid credentials");
}

*/








/* question 13
let a = parseInt(prompt("enter a number:"))
let b = parseInt(prompt("enter number2"))

console.log(`before swapping a=${a} and b= ${b}`)


a=a+b;
b=a-b;
a=a-b;

console.log(`after swapping a=${a}  and b =${b}`)

*/







/* question14
var num = Number(prompt("enter a number:"));

if( num % 3 === 0 && num % 5 ===0){
   console.log("fizzbuzz")
}
else if(num % 3 === 0)
   {
console.log("fizz")
}
else if( num % 5 === 0){
   console.log("buzz")
}
else{
   console.log(num)
}
*/









/* question 15
let num= Number(prompt("enter a number:"))
let count =0;
while( num > 0){
   let rem = num % 10;
   num = Math.floor(num/10);
   count = count * 10 +rem;
}

alert (` reverse number is ${count}`)



*/










/*  question 16
let num =Number(prompt("enter a number:"))
let sum =0;
while (num > 0){
   let rem = num % 10;
   sum= sum + rem;
   num = Math.floor(num / 10);
}

console.log(`the sum is ${sum}`)


*/









/* question 18
var str=prompt("enter a number:");
let rev="";
for(var i=str.length-1 ; i >=0 ;i--){
   rev += str[i];
}
console.log("reversed number: " +rev);
*/







/* question 19
var a=Number(prompt("enter first number:"));
var b=Number(prompt("enter second number:"))
var c=Number(prompt("enter third number:"));


let secondlarge;

if((a > b && a < c) || (a > c && a < b) ){
   secondlarge=a;
}
else if((b > a && b < c) || (b > c && b < a)){
   secondlarge=b;
}
else{
   secondlarge=c;
}
console.log("the second largest number is:"+secondlarge);
*/








/* question 20
let str=prompt("enter a string:");
let res= null;

for(let char of str){
   if(str.indexOf(char) === str.lastIndexOf(char)){
      res=char;
      break;
   }
}
if(res){
   console.log("the first non reccuring character is:"+res)
}
*/





/* question 21 
const num =prompt("enter a number:");
let count =0;
for(let i=0; i<num.length;i++){
   const digit=parseInt(num[i]);
   if(!isNaN(digit) && digit % 2 === 0){
      count ++;
   }
}
console.log("it has " + count + " even digits");
*/






/* question 22
var age=prompt("enter your age:");
var salary = prompt("enter your salary:");

if(age <18){
   console.log("not eligible");
}
else if(age >= 18 && salary < 20000)
{
   console.log("low salary");
}

else if(salary >= 50000){
   console.log("HIGH SALARy")
}

else{
   console.log("medium salary");
}

*/










/* question 23
let word=prompt("enter a word");
let toggled ="";

for (let i=0; i <word.length;i++){
   let char= word[i];

   if(char === char.toUpperCase()){
      toggled += char.toLowerCase();
   }


else{
   toggled += char.toUpperCase();
}
}
console.log("toggled case :" +toggled)

*/








/* questio 24
let arr = [1, 2, 3, 5]; // Example input
let missing;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i + 1] !== arr[i] + 1) {
    missing = arr[i] + 1;
    break;
  }
}

console.log("The missing number is: " + missing);

*/






/* question 25
let num=Number(prompt("enter a single digit number:"));
let word;

switch(num){
   case 0:
      word="zero";
      break;
   case 1:
       word="one";
      break;
   case 2:
      word="two";
      break; 
   case 3:
      word="three";
       break; 
   case 4:
      word="four";
      break;  
   case 5:
      word="five";
      break; 
   case 6:
      word="six";
      break;
   case 7:
      word="seven";
      break;
   case 8:
      word="eight";
      break;
   case 9:
       word="nine";
      break;
   default:
      word="not a single digit number";

}

console.log("you entered: "+ word)
*/
