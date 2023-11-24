//Question-1.d : return all the prime numbers in an array 
//IIFE function

let exampleAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var prime = (function pri(ar){
    let arPrime =[];

    for(var i=0;i<ar.length;i++){
        let count=0;
        for(var j=1;j<=ar[i];j++){
            if(ar[i] % j == 0){
                count++;
            }
        }
        if(count == 2){
            arPrime.push(ar[i]);
        }
    }

    return arPrime;

})(exampleAr);
console.log("The prime numbers in the given array is :", prime);