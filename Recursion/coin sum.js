
function helper(arr, s, e, sum, res) {

    // Adding sum into res
    if (sum != 0) {
        res.push(sum)
    }

    // recursively call for each element  of arr
    for (let i = s; i < e; i++) {
        helper(arr, i + 1, e, sum + arr[i], res);
    }

    // return the res after adding all subsequences sum
    return res;
}

function fun(arr, n) {

    let res = helper(arr, 0, n, 0, []);

    // Sort the array
    res.sort((a, b) => a - b);

    let ans = [];
    for (let i = 0; i < res.length; i++) {

        if (res[i] !== res[i + 1]) {
            ans.push(res[i]);
        }

    }

    console.log(ans.length)
    console.log(ans.join(" "))
}

function runProgram(input) {
    // Write code here

    input = input.trim().split("\n");
    let arr = input[1].split(" ").map(Number);

    fun(arr, input[0]);

}