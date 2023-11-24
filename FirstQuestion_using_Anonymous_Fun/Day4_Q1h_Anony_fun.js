//Question-1.a : Rotate an array by k times
//Anonymous function

let examAr = [1, 2, 3, 4, 5];
let examAr1 = [6, 7, 8, 9, 10];
let k =3;

var leftRotate = function(ar){
    for(var i=0;i < k;i++){
        var firstValue = ar.shift();
        // console.log(firstValue);
        ar.push(firstValue);
        // console.log(ar);
    }
    return ar;
}

var rightRotate = function(ar){
    for(var j=0;j < k;j++){
        var lastValue = ar.pop();
        // console.log(lastValue);
        ar.unshift(lastValue);
        // console.log(ar);
    }
    return ar;
}

console.log("Left rotated given array :",leftRotate(examAr));
console.log("Right rotated given array :",rightRotate(examAr1));