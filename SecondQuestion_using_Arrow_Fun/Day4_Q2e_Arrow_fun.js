//Question-2.e : Return all the palindromes in an array 
//Arrow function

let exampleAr = [12321, 245, "madam", 313, "level", "vijay", "dccaccd"];

var palin = (ar) => {
    let pal = [];
    
    for(var i=0;i<ar.length;i++){
        let str = ar[i].toString();
        // console.log(str, typeof(str));
        let strHalfLength = Math.floor((str.length/2));
        // console.log(strHalfLength);
        var count=0;

        for(var j=0;j<strHalfLength;j++){
            for(var k= str.length-1;k >= strHalfLength;k--){
                if(str[j] == str[k]){
                    count++;
                    // console.log(str[j], str[k], count);
                    break;
                }
                else{
                    continue;
                }
            }
        }
        // console.log(count);
        if(count == strHalfLength){
            pal.push(str);
        }else{
            continue;
        }
    }
    console.log(pal);
}
palin(exampleAr);
// console.log("The Palindromes in the given array :", palin(exampleAr));