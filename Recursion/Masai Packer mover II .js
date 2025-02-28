/*

You are tasked with transporting K units of weight to Bangalore using N trucks, where each truck has a specific capacity C[i]. The constraints and conditions are:

Trucks must be completely filled: A truck can only travel if it is filled to its full capacity.
One truck per day: Since there's only one driver, only one truck can operate each day.
Find the minimum and maximum number of days: Calculate how many days it will take to move all K units of weight, considering:
Minimum Days: Use trucks with the largest capacities first to minimize the number of days.
Maximum Days: Use trucks with the smallest capacities first to maximize the number of days.
Impossibility Check: If it is not possible to fill the trucks to transport exactly K units of weight (e.g., the sum of all capacities is less than K or K cannot be divided among the trucks appropriately), output -1.

*/

function helper(arr, sum, k, days, ans) {

    // When all weight is equal to k then store the days value 
    if (sum == k) {
        ans[0] = Math.min(ans[0], days);
        ans[1] = Math.max(ans[1], days);
        return ans;
    }
    // If weight got more then the k return 
    if (sum > k) {
        return;
    }
    // run for each truck 
    for (let i = 0; i < arr.length; i++) {
        helper(arr, arr[i] + sum, k, days + 1, ans);
    }

}


function fun(arr, n, k) {

    // ans store min and max values of the result
    let ans = [Infinity, -Infinity]
    //  Using helper function and update the ans to store the min and max 
    helper(arr, 0, k, 0, ans);
    if (ans[0] == Infinity || arr[1] == -Infinity) {
        return -1;
    }
    return ans.join(" ");
}


function runProgram(input) {
    // Write code here

    input = input.trim().split("\n");
    const elem = input[0].split(" ").map(Number);
    const k = elem[0];
    const n = elem[1];

    const arr = input[1].split(" ").map(Number);
    arr.sort((a, b) => b - a)

    let ans = fun(arr, n, k);
    console.log(ans);
}