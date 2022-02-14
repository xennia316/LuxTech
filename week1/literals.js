/**
 * by @xennia316
 */
//Literals represent values in JavaScript

//Array Literals: A list of zero or more objects ([])

let list = [1, 2, 3];
console.log(typeof list);

//Acsessing values

console.log(list[0]);

//loops
//Basic for loops

//increment and decrement operators add 1 (++) or subtract one (--)
for (let i = 0; i < 3; i++) {
    console.log(i);
}
//Length of an array
console.log(list.length);
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

// Object literals is a list of zero or more pairs of property manes and associated values of an object, enclosed in curly braces ({})
let company_toyota = {
    model: 'Probox',
    manufactureYear: 2022,
    isOld: false,
    prevBuyers: ['bon', 'vic'],
    "description of car": "nice one",
    12: "go",
    extraFeatures: {
        engine: "nice",
        addBuyer(name) {
            this.prevBuyers.push(name)
        }
    }
}
//accessing object values
//dot notation
// const toyota = new company_toyota()
// company_toyota.extraFeatures.addBuyer("Sonia");
// console.log(company_toyota.extraFeatures);

// String methods

let string = "Sonia";
console.log(string[3]);

let replaced = string.replace("i", "y");
console.log(replaced);
console.log(replaced.length);

//searching
let search = string.indexOf("ny");
console.log(search);
//-1 means it does not exist

//splitting
let splitted = string.split("");
console.log(splitted);
console.log(splitted.join(" "));

//array methods

let coffee = ["French Roast", 'Expresso', 'Kona'];

coffee.forEach((ele, i) => {
    console.log(ele)
})
//slicing an array
console.log(coffee.slice(1, 3));

//splice
console.log(coffee.splice(0, 3));

//Object methods

let car = {
    model: 'any',
    name: 'bmw'
}

console.log(Object.values(car));
console.log(Object.assign(car, {
    issues: 'None',
    buyers: "Sonia",
}));

//Spread operator (...)
let joined = { issues: 'none', ...car }
let joinArr = [...[1, 2, 3], ...[4, 5, 6]]