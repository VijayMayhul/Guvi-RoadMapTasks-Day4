//Question-1.f : Return median of two sorted arrays of the same size  
//IIFE function

var ar = [1, 12, 15, 26, 38];
var ar1 = [2, 13, 17, 30, 45];

for(let v of ar1){
    ar.push(v);
}

// console.log(ar);

var median = (function med(ar){

    //sorting array
    for(var i=0;i<ar.length-1;i++){
        for(var j=0;j<ar.length-i-1;j++){
            if(ar[j] > ar[j+1]){
                let temp = ar[j];
                ar[j] = ar[j+1];
                ar[j+1] = temp;
            }
            
            
        }
    }
    // console.log(ar);
    
    let medi;
    var arL = ar.length;
    //finding median
    if(arL % 2 == 0){
        let medi1 = ar[arL/2-1];
        let medi2 = ar[arL/2];
        medi = (medi1 + medi2)/2;
    }else{
        medi = ar[Math.floor(arL/2)];
    }

    return medi;
})(ar);



console.log("The median in the given array is :",median);