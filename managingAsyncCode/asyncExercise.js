// Write a function called inOrder that accepts two callbacks and invokes them in order. 
// Implement inOrder using the callback pattern.

const inOrder = (fn1, fn2) => {
    if (fn1) {
        fn1
    } else {
        throw("arguments must be a function");
    }

    if (fn2) {
        fn2
    } else {
        throw("arguments must be a function");
    }
}


var logOne = setTimeout(function() {
    console.log("one!");
}, Math.random() * 1000);
  
var logTwo = setTimeout(function() {
    console.log("two!");
}, Math.random() * 1000);
  
// inOrder(logOne, logTwo);


function inOrderPromises(fn1, fn2) {
    () => fn1
    .then( () => fn2)
}

inOrderPromises(logOne, logTwo);

/*
Example Asynchronous Javascript Request

fetch('https://omdbapi.com?t=titanic').then(function(response){
    return response.json().then(function(data){
        console.log(data);
    });
});
*/

fetch('https://pokeapi.co/api/v2/pokemon/')
.then((res) => res.json())
.then((data) => {
    const pokemons = data.results;

    for(let i = 0; i < pokemons.length; i++) {
        console.log(pokemons[i].name);
    }
});