const array1 = [1,2,3];
const array2 = [1,2,3];
console.log(array1 == array2);

const array3 = [1,2,3];
const array4 = array3;
console.log(array3 == array4);

let a = 10;
let b = 20;
a += b;
console.log(a);

let c = '鈴木';
let d = '一郎';
c += d;
console.log(c);

let e = 5;
let f = 2 ;
e *=f;
console.log(e);

function myFunction(a){
    const result = a + 2;
    return result;
}

function myFunction(){
    console.log('こんにちは');
}