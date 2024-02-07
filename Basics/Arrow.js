// Window is the most outer object of browser
// this //
// Basic Arrow Function//  const wow = () => {}
//Implicit return  const wow = (x,y) => x+y

const myObj = {
    name: "Ateeq",
    salary:"Alhamdullilah",
    wow: ()=>console.log((this)),
}


const myObj1 = {
    name: "Ateeq",
    salary:"Alhamdullilah",
    wow: function (){console.log(this)},
}
// myObj1.wow()
// myObj.wow()

// const check = (x,y) =>(x+y)
// p=check(3,6)
// console.log(p);

// IIFE (Immediately Invoked Function Expression)

((name) => {
    console.log(`${name}`);
})('Ateeq');