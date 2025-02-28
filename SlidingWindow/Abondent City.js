

function abondentCity(coins, N, target) {
    let minLength = Infinity;
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < N; end++) {
        currentSum += coins[end];

        while (currentSum >= target && start < end) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= coins[start];
            start++;
        }
    }
    return minLength;
}


console.log(abondentCity([1, 2, 3, 4, 5], 5, 7));
console.log(abondentCity([1, 7], 2, 10));
