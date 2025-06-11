function countPrimeNumbers(target) {
    if (target && Number.isInteger(target) && target > 2) {
        const record = new Array(target).fill(1);
        const primes = [2];
        const max = Math.sqrt(target) | 0; // Bitwise OR for faster integer conversion

        for (let prime = 3; prime <= max; prime += 2) {
            if (record[prime]) {
                // Start from prime*prime and increment by prime*2 (skip even multiples)
                for (let multiple = prime * prime; multiple < target; multiple += prime << 1) {
                    record[multiple] = 0;
                }
            }
        }

        for (let sievedNumber = 3; sievedNumber < target; sievedNumber += 2) {
            if (record[sievedNumber]) {
                primes.push(sievedNumber);
            }
        }
        return primes;
    }
    return "Please enter an integer greater than two";
}

setTimeout(() => {
    setTimeout(() => {
        for (let i = 0; i < 200; i++) {
            countPrimeNumbers(100);
        }
        
        setTimeout(() => {
            for (let i = 0; i < 200; i++) {
                countPrimeNumbers(100);
            }

            setTimeout(() => {
                for (let i = 0; i < 200; i++) {
                    countPrimeNumbers(100);
                }

                setTimeout(() => {
                    for (let i = 0; i < 200; i++) {
                        countPrimeNumbers(100);
                    }

                    setTimeout(() => {
                        const t0 = window.performance.now();

                        for (let i = 1; i <= 100; i++) {
                            countPrimeNumbers(100);
                        }

                        const t1 = window.performance.now();

                        console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
                    }, 0);
                }, 0);
            }, 0);
        }, 0);
    }, 0);
}, 0);