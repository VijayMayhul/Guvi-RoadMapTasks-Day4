//Question-1.a : Rotate an array by k times
//IIFE function

let examAr = [1, 2, 3, 4, 5];
let examAr1 = [6, 7, 8, 9, 10];
let k =3;

var leftRotate = (function lRot(ar){
    for(var i=0;i < k;i++){
        var firstValue = ar.shift();
        // console.log(firstValue);
        ar.push(firstValue);
        // console.log(ar);
    }
    return ar;
})(examAr);

var rightRotate = (function rRot(ar){
    for(var j=0;j < k;j++){
        var lastValue = ar.pop();
        // console.log(lastValue);
        ar.unshift(lastValue);
        // console.log(ar);
    }
    return ar;
})(examAr1);

console.log("Left rotated given array :",leftRotate);
console.log("Right rotated given array :",rightRotate);