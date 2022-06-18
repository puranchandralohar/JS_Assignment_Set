// Check whether the given number is equal to its reverse number or not.
let number = parseInt(process.argv[2]);

let firstDigit = Math.floor(number/100);
let secondDigit = Math.floor((number%100)/10);
let lastDigit = ((number%100)%10);

let rev = lastDigit*100 + secondDigit*10 + firstDigit;

if(number==rev){
    console.log("Equal to its Reverse");
}else{
    console.log("Not Equal");
}