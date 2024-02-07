

//  var scope k ander b declare kro to bahir use ho sakta ha matlab global scope hota
var a = 10

if(true){
    a = 100
    console.log("Inner",a);
    a = 9
    console.log("Inner CHanged",a);
}

console.log("Outer",a);
a=999
console.log("Outer Changed",a);