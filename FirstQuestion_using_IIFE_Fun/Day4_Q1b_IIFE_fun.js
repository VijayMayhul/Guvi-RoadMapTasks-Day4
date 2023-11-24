//Question-1.b : Convert all the strings to title caps in a string array 
//IIFE function

let exampleAr = ["thiru","anand","vijay","karthik","magesh","meeran"];

var titleCap = (function cap(ar){
    let arCap=[];
    for(var i=0;i<ar.length;i++){
        let cap = ar[i].replace((ar[i].charAt(0)), (ar[i].charAt(0).toUpperCase()));
        arCap.push(cap);
    }
    return arCap;
})(exampleAr);


console.log("The title capitalized array :", titleCap);