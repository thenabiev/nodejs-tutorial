// Task - Prime numbers

const args=process.argv.slice(2);

function showPrimeNumber(a, b){
    for (let i=a; i<=b; i++){
        let isPrime=true;
        for (let j=2; j<=i; j++){
            if(i%j===0 && j!==i){
                isPrime=false;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}
showPrimeNumber(args[0]*1, args[1]*1);

console.log(process.argv[1]);