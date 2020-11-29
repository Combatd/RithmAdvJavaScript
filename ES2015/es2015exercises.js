// Convert the following es5 code blocks into es2015 code:

// var person = {
//     fullName: "Harry Potter",
//     sayHi: function(){
//         setTimeout(function(){
//             console.log("Your name is " + this.fullName)
//         }.bind(this),1000)
//     }
// }

let person = {
    fullName: "Harry Potter",
    sayHi() {
        setTimeout(( () => {
            console.log("Your name is " + this.fullName);
        }).bind(this), 1000);
    }
}

// var name = "Josie"
// console.log("When " + name + " comes home, so good")

let name = "Josie";
console.log(`When "${name}" comes home, so good`);

// var DO_NOT_CHANGE = 42;
// DO_NOT_CHANGE = 50; // stop me from doing this!

// var arr = [1,2]
// var temp = arr[0]
// arr[0] = arr[1]
// arr[1] = temp

// function double(arr){
//     return arr.map(function(val){
//         return val*2
//     });
// }

// var obj = {
//     numbers: {
//         a: 1,
//         b: 2
//     } 
// }

// var a = obj.numbers.a;
// var b = obj.numbers.b;

// function add(a,b){
//     if(a === 0) a = 0
//     else {
//         a = a || 10    
//     }
//     if(b === 0) b = 0
//     else {
//         b = b || 10    
//     }
//     return a+b
// }