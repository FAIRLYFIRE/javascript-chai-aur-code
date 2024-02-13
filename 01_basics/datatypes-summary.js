let email;
//Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const id = Symbol('789')
const id2 = Symbol('789')

console.log(id == id2); //use of symbol

const bigNum = 8765432456789654324569876543287654323456789n
console.log(typeof bigNum)

// Reference (Non-Primitive)

// Array, Objects, Functions

let myObj = {
    name: "somya",
    age: 23
}
const popStars = ["TS", "Bebe", "Luv"]

const myFunction = function(){
    console.log("hi somya")
}

console.log(typeof myFunction);