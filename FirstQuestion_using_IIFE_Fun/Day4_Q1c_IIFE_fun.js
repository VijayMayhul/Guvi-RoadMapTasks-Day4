//Question-1.c : Sum of all numbers in an array 
//IIFE function

let exampleAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var total = (function sum(ar){
    let sum=0;
    for(var i=0;i<ar.length;i++){
        sum += ar[i];
    }
    return sum;
})(exampleAr);
console.log("The sum of the given array is :", total);