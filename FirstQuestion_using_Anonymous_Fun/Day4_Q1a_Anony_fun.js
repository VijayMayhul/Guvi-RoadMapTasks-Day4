//Question-1.a : print odd numbers in an array 
//Anonymous function

let exampleAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var odd = function(ar){
    let arOdd = [];
    for(var i=0;i<ar.length;i++){
        if(ar[i] % 2 != 0){
            arOdd.push(ar[i]);
        }
    }
    return arOdd;
}
console.log("The odd numbers in the given array are :", odd(exampleAr));