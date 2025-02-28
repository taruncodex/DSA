/*





*/

function func(arr, k, n) {
  if (k < 0) {
    return 0;
  }
  if (k == 0) {
    return 1;
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += func(arr, k - arr[i], n);
  }

  return sum;
}

function runProgram(input) {
  // Write code here

  input = input.trim().split("\n");
  let line = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);

  let ans = func(arr, line[0], line[1]);

  console.log(ans);
}
