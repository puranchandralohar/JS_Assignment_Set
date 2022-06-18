// Check whether the given number is an armstrong number or not.
let number = parseInt(process.argv[2]);

let firstDigit  = Math.floor(number/100);
let secondDigit = Math.floor((number%100)/10);
let lastDigit= ((number%100)%10);

if(firstDigit**3 + secondDigit**3 + lastDigit**3 == number){
    console.log("It is an Armstrong Number");
}else{
    console.log("Not an Armstrong Number");
}