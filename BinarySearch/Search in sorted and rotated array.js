function func(arr, n, target) {

    // Step : 1 : check whether mid lies in sorted part or unsorted part. Go to the sorted part
    // Step :2  now check whether mid present in that sorted prt or not 
    let s = 0;
    let e = n - 1;

    while (s <= e) {

        let mid = s + Math.floor((e - s) / 2);

        if (arr[mid] == target) {
            return mid;
        }

        else if (arr[s] <= arr[mid]) {
            if (arr[s] <= target && target < arr[mid]) {
                e = mid - 1;
            }
            else {
                s = mid + 1;
            }
        }
        else {
            if (arr[mid] < target && target <= arr[e]) {
                s = mid + 1;
            }
            else {
                e = mid - 1;
            }
        }
    }

    return -1;

}


function runProgram(input) {
    // Write code here

    input = input.trim().split("\n");

    let nums = input[0].split(" ");

    let N = +nums[0];
    let k = +nums[1];

    let arr = input[1].split(" ").map(Number);

    console.log(func(arr, N, k));


}