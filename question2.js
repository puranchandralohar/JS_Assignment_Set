//Print the sum of all even numbers in a range from a to b.
//(Including a,b)
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let sum = 0;
for(let i=a;i<=b;i++){
    if(i%2==0){
        sum= sum+i;
    }
}
console.log(sum);