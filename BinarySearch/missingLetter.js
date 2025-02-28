function func(arr) {
  let s = 0;
  let e = 12;

  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);

    if (mid == arr[mid]) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return s;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");

  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let arr = input[line++].split(" ").map(Number);
    let ans = func(arr);
    console.log(ans);
  }
}
