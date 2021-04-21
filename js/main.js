//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


// SOLUTION TO EXERCISE 1 //
function foods(){
    for(let i = 0; i < Object.keys(person3).length; i++){
        // person3 at index of i
        console.log(Object.keys(person3)[i])
        console.log(Object.values(person3)[i])
    }
    }
    
    (foods(person3))



// Darin's solution:
// iterate through keys
// if value is array, stringify
// else print the value
// console.log(JSON.stringify(json[0]));



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// SOLUTION TO EXERCISE 2 //
class Person{
    // constructor initilizes
    constructor(name, age,){
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        return `Name: ${this.name} \n Age: ${this.age}`
    }

    // Increment age by one
    addAge = (n=1) => {
        return this.age += n;
    }
}

// Create two instances of the Person Class
let barley = new Person('Barley', 18);

let ian = new Person('Ian', 16);

// Use the printInfo method from the instantiated Person class
console.log(barley.printInfo())
console.log(ian.printInfo())

//Increment one Person's age by 3 years: 
console.log(`${barley.name}'s new age: ${barley.addAge()}`)
console.log(`${barley.name}'s new age: ${barley.addAge()}`)
console.log(`${barley.name}'s new age: ${barley.addAge()}`)




// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// SOLUTION TO EXERCISE 3 //
async function findStrLen(myString){
    let str_length = await myString.length
    if( myString.length < 10 ){
        console.log(`String Length: ${str_length} \n'Small Number'`)
    } else{
        console.log(`String Length: ${str_length} \n'Big word'`)
    } 
}

findStrLen("And I think to myself, what a wonderful world.")
findStrLen("Hi!")



// This if statement works, but not a promise
// function determineStrLen(aString){
//     if( aString.length < 10 ){
//         console.log('Small Number')
//     } if ( aString.length > 10 ){
//         console.log('Big word')
//     } 
// }

// determineStrLen("Hi")
// determineStrLen("Hello Everybody!")