//Question-1.a : Remove duplicates in an array 
//IIFE function

let examAr = [8,3,5,1,9,2,3,0,9,2]; 

var unique = (function uni(ar){
    let arUnique=[];
    for(var i=0; i<ar.length;i++){
        if(arUnique.indexOf(ar[i]) == -1){
            arUnique.push(ar[i]);
        }
    }
    return arUnique;
})(examAr);

console.log("The duplicates removed array :",unique);