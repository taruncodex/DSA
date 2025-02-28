function func(n) {

  
  if (n < 0) {
    return 0;
  }
  if (n == 0) {
    return 1;
  }

  return func(n - 1) + func(n - 3) + func(n - 5);
}


function runProgram(input) {
  // Write code here

  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let ans = func(+input[line++]);
    console.log(ans);
  }
}
