function func(arr) {
  let k = arr[3];

  let s = 0;
  let e = k;
  let res = -1;

  //console.log( " k " , k)

  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    let x = mid;
    let val = arr[0] * x ** 2 + arr[1] * x + arr[2];

    // console.log("value" , val , "for mid : " , mid )

    if (val >= k) {
      //console.log("Entered  in if : " , val , k)
      res = x;
      e = mid - 1;
    } else {
      //   console.log("Entered  in else : " , val , k)
      s = mid + 1;
    }
  }
  if (res == 0) {
    return -1;
  }
  return res;
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
