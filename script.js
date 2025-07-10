let x = 10;
let y = 5;
console.log("Sum: " + (x+y));
console.log("Difference: " + (x-y));
console.log("Product: " + (x*y));
console.log("Quotient: " + (x/y));

let age = prompt("Enter your age:");
age = Number(age);
if (age>=18) {
    alert("you're an adult");
}  else {
    alert("you're a minor");
}

let fruits = ["Apple" , "Banana ", "Cherry"];
for (let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}
 let firstName ="John";
 let lastName ="Doe";
 let fullName = firstName + " " + lastName;
 alert( "Hello , " + fullName);

 let isAdmin = true ;
 let isLoggedIn = false ;
 if ( true) {
    if ( false){
        console.log( "welcome , admin!");
    }
 }