function myFunction(a,b){
    if(a >= 100){
        return a;
    }

    return b;
}

function calcFunction(price, tax){
    const result = price + price * tax;
    return result;
}

const myResult = calcFunction(100, 0.1);
console.log(myResult);

function myFunction(){
    console.log('こんにちは');
}

myFunction();