// Constructor Makes Singleton
// Object.create()      Constructor way

// Main difference between Arrays and Objects

// How to access Object     By dote   By Square Bracket (Espacially For Symbols Keys)

// Object Freeze Will not allow to change Object

const sym = Symbol("abc")

const myObj = {
name : "Ateeq",
fName : "Aslam",
sym : "wow"
}

const myobj2 = {
    wowwww: "1",
    wwwwww: "2"
}

const obj3 = {...myObj,...myobj2}
// console.log(myObj);
// console.log(obj2);

console.log(obj3);



// Object.assign     Important for merging objects

//Object Keys



//Destructuring