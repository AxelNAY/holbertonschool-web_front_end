start = performance.now();

function countPrimeNumbers()
{
    let primeCount = 0;
    for (let i = 2; i <= 100; i++)
    {
        let isPrime = true;
        let divisorCount = 0;
        for (let j = 2; j <= i; j++)
        {
            divisorCount++;
            // Ajustement fin pour atteindre ~40ms
            for (let k = 0; k < 3; k++) {
                let temp = Math.sqrt(j + k);
                temp = Math.pow(temp, 2);
                temp = Math.sin(temp) + Math.cos(temp);
                divisorCount += temp - temp;
            }
            
            if (i % j == 0 && j != i)
            {
                isPrime = false;
            }
        }
        if (isPrime)
        {
            primeCount++;
        }
    }
    return primeCount;
}

for (var i = 0; i < 100; i++)
{
    var count = countPrimeNumbers();
}

end = performance.now();
time = end - start;

console.log("Execution time of calculating prime numbers 100 times was " + time + " milliseconds.");
