/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let naturals = [1,2,3,4,5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let thisMe = {
    name:       "Florian",
    surname:    "Dreyer",
    email:      "flodreyer@web.de",
    age:        30
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

thisMe.license = false;
console.log(thisMe);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete thisMe.age;
console.log(thisMe);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

thisNotMe = {
    name:       "Norian",
    surname:    "Whyer",
    email:      "sir.fakington@gmail.com",
};
console.log(thisNotMe);
console.log("Do they have the same email addresses?", thisMe.email===thisNotMe.email);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 50.01;
let actualCost = (totalShoppingCart>50) ? totalShoppingCart : totalShoppingCart + 10;
console.log(`With products worth ${totalShoppingCart}€ your total cost is ${actualCost}€.`);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

actualCost = (totalShoppingCart>50) ? 0.8 * totalShoppingCart : 0.8 * totalShoppingCart + 10;
console.log(`With products worth ${totalShoppingCart}€ and our 20% discount your total cost is ${actualCost}€.`);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car1 = {
    brand: "Volkswagen",
    model: "T1",
    color: "red",
    licensePlate: "H-VW-1962",
}
let car2 = {}, car3 = {}, car4 = {}, car5 = {};
car2 = Object.assign(car2, car1);
car3 = Object.assign(car3, car1);
car4 = Object.assign(car4, car1);
car5 = Object.assign(car5, car1);
car2.licensePlate = "H-VW-1963";
car3.licensePlate = "H-VW-1964";
car4.licensePlate = "H-VW-1965";
car5.licensePlate = "H-VW-1966";

console.log("\nFirst and last car:");
console.log(car1);
console.log(car5);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsToRent = [car1, car2, car3, car4, car5];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("\nRemove the first car, then the last:");
carsToRent.shift(); //first
console.log(carsToRent);

carsToRent.pop(); //last
console.log(carsToRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("\nTypes of variables:")
console.log("car1 is:", typeof(car1));
console.log("car1.licensePlate is:", typeof(car1.licensePlate));
console.log("car1.brand is:", typeof(car1.brand));

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [];
carsForSale.push(car1);
carsForSale.push(car2);
carsForSale.push(car3);

let totalCarsWrong = carsToRent.concat(carsForSale);
console.log("concat gives ", totalCarsWrong.length); //due to car 2 and 3 being in both. The "real" result should be car1,car2,car3,car4
let totalCars = [...new Set([...carsToRent, ...carsForSale])]; // Recommended way to do this apparently due to being O(n) vs O(n^2) when iterating and checking for duplicates
console.log("Total cars available are:", totalCars.length); // And I know technically the exercise was to get the number only

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let i = 0; i < carsForSale.length; i++) {
    //let carName = Object.keys({carsForSale[i]}); //doesn't work :()
    console.log("\nHere we have car Number", i+1); // I wanted to have the name of the respective variable here e.g. 'car1'
    console.log("Brand:", carsForSale[i].brand);
    console.log("Model:", carsForSale[i].model);
    console.log("Color:", carsForSale[i].color);
    console.log("License Plate:", carsForSale[i].licensePlate);
}