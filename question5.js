// Take two numbers and find product of all numbers between them
// that satisfy following condition (inclusive range): 
// Condition 1 - Second last digit of number is 4
// Condition 2 - Numbers should be even
let number1 = parseInt(process.argv[2]);
let number2 = parseInt(process.argv[3]);
let product = 1;
for(i=number1; i<=number2; i++){
    let secondlastDigit = i % 10; 
    if(i%2==0 && secondlastDigit==4){
    product= product*i;
    }
}
console.log(product);