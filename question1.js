//Using a loop print all odd numbers up to and including n.
//Don’t include 0. 
let n = parseInt(process.argv[2]);

for(let i = 1 ; i<=n; i++){
    if(i%2==1){
        console.log(i);
    }
}
