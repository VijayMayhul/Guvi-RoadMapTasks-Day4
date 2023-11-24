//Question-1.a : Remove duplicates in an array 
//Anonymous function

let examAr = [8,3,5,1,9,2,3,0,9,2]; 

var unique = function(ar){
    let arUnique=[];
    for(var i=0; i<ar.length;i++){
        if(arUnique.indexOf(ar[i]) == -1){
            arUnique.push(ar[i]);
        }
    }
    return arUnique;
}

console.log("The duplicates removed array :",unique(examAr));