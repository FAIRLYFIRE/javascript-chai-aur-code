// arrays

const myArr = [0, 1 , 2, 3, 4, 5]
const myFav = ["Lotus", "Purple", "Hatchback", "Romantic", "Cottage", "2000s", "Banyan", "Cat"]
const myList = new Array(3,4,5,6,7, 8)
// console.log(myArr[4]);

// Array methods

// myArr.push(7)
// console.log(myArr);
// myArr.pop()

// myArr.unshift(8)
// myArr.shift() // removes value from the start of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// slice , splice
console.log("A", myArr);
const mynA1 = myArr.slice(1,4)
console.log(mynA1);
console.log("B", myArr);

const mynA2 = myArr.splice(1,4)
console.log(mynA1);
console.log("C", myArr);