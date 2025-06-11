start = performance.now();

function countPrimeNumbers()
{
    let primeCount = 0;
    for (let i = 2; i <= 100; i++)
    {
        let isPrime = true;
        let divisorCount = 0;
        for (let j = 2; j < i; j++)
        {
            divisorCount++;
            if (i % j == 0)
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

var count = countPrimeNumbers();

end = performance.now();
time = end - start;

console.log("Execution time of printing countPrimeNumbers was " + time + " milliseconds.");
