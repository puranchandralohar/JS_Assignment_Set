// Take a number and return all the even digits of the number.

let number = parseInt(process.argv[2]);

let i=1;
while(number>0){
    rem=number%10
    number=Math.floor(number/10);
    i++
    if(i%2==0){
        console.log(rem);
    }
}