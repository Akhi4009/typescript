function echo<T>(arg: T): T {
    return arg;
}

let res=echo("Hello")
let res1=echo(123)
console.log(res,res1);

//Genric interface

interface KeyValuePair<k, v> {
    key:k;
    value:v;
}

let pair1:KeyValuePair<string, number> = {key:"age",value:42};


// Generic function 
function printLength<T extends{length:number}>(input:T):void{
    console.log(input.length);
}


// . Generic Function with Array Sorting:

function sortArray<T>(arr:T[]):T[]{
    return arr.slice().sort()
}

const sorted= sortArray(["akhi","yadav","raj"])
console.log(sorted);