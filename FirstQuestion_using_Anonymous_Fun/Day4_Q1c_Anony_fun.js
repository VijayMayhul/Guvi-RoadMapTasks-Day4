//Question-1.c : Sum of all numbers in an array 
//Anonymous function

let exampleAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var total = function(ar){
    let sum=0;
    for(var i=0;i<ar.length;i++){
        sum += ar[i];
    }
    return sum;
}
console.log("The sum of the given array is :", total(exampleAr));