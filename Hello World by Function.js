// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 
// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"



// CODE
var createHelloWorld = function (){
    function f (){
        return "Hello World"
    }
    return f
}