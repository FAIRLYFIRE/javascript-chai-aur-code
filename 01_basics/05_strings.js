const name = "somya"
const repoCount = 5

// console.log(name + repoCount + " value"); // recomended to not use this
// console.log(`${name}${repoCount} value`); // better

const gameName = new String('somya-0601-kumari')

// console.log(gameName[3]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,5) //does not take negative indexing
// console.log(newString);

const anotherString = gameName.slice(-9,5)
// console.log(anotherString);

const anotherString2 = "        somya   "
// console.log(anotherString2);
console.log(anotherString2.trim());

const url = 'https://dev.azure.com/Livlong%20Wellness/_workitems/edit/3055'
// console.log(url.replace('%20', '-'));

console.log(url.includes('dev'));

console.log(gameName.split('-'));