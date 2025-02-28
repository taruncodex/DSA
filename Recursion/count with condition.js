// Function to get Subsequences.
function helper(arr, s, e, sum, res) {
    // if sum is not 0 then store it into the result array ,
    // however you can skip this conditoin and diretly add sum to the res
    if (sum != 0) {
        res.push(sum);
    }

    // Traverse s to e and cal for the next i with add current element into the sum updating sum 
    for (let i = s; i < e; i++) {
        helper(arr, i + 1, e, sum + arr[i], res);
    }
    return res;
}

function fun(arr, n, x) {
    let res = helper(arr, 0, n, 0, []);

    let cnt = 0;
    for (let i of res) {
        if (i == x) {
            cnt++;
        }
    }

    console.log(cnt)
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    const elem = input[0].split(" ").map(Number);
    const n = elem[0];
    const x = elem[1];

    const arr = input[1].split(" ").map(Number);

    let ans = fun(arr, n, x);

}