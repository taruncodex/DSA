//Bubble sort

function solve(N, arr) {


  for (let i = 0; i < N - 1; i++) {
    flag = true;
    for (let j = 0; j < N - 1 - i; j++) {

      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j] + arr[j + 1];
        arr[j + 1] = arr[j] - arr[j + 1];
        arr[j] = arr[j] - arr[j + 1];

        flag = false;
      }

    }

    if (flag) {
      break;
    }


  }

  console.log(arr.join(" "));

}



// Bubble Sort by Recursion :
function sort(arr, n) {
  if (n < 0) {
    return;
  }
  for (let j = 0; j < n; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  sort(arr, n - 1);
  return arr;
}


function runProgram(input) {
  // Write code here

  input = input.trim().split("\n");
  let n = +input[0];

  let arr = input[1].split(" ").map(Number);
  let ans = sort(arr, n);

  console.log(ans.join(" "));
}