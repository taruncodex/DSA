const fact = (n) => {
    let ans = (n == 0) ? 1 : n * fact(n - 1);
    return ans;
} 
