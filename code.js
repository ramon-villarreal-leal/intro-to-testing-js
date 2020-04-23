// helloWorld function
//same as function helloWorld() { } because functions are first class citizens.
const helloWorld = function () {
    return "Hello, World!";
}

const sayHello = function (input) {
    if (input === false) {
        return "Hello, World!";
    } else if(input) {
        return "Hello, " + input + "!";
    }  else {
        return "Hello, " + input + "!";
    }
}


// function isNumeric () {
//     if(input === 'Jim Henson') {
//         return false;
//     } else {
//         return true;
//     }
// }