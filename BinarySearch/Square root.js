function func(n) {
  let s = 1;
  let e = n;
  let res = 0;

  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    let ele = mid * mid;
    if (ele == n) {
      return mid;
    } else if (ele > n) {
      e = mid - 1;
    } else {
      res = mid;
      s = mid + 1;
    }
  }
  return res;
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



var mySqrt = function (x) {

  // Step-1 : set s = 1 and e =  half of the x , as sqrt of x will definately be lower than it's half .
  // Step-2 : while s<=e , get mid and perform the binary search 
  // Step-3 : track the last value that was near to the sqrt of x , if the there is no perfect sqrt then nearest value to sqrt will be the answer

  // Note Point: 
  // 1. Don't forget to use Math.floor while dviding
  // 2. Handle edge case when x = 1 
  // 3. Always remember :- s updated by mid + 1 and eu updated by mid -1 ,  


  if (x == 1) {
    return 1;
  }


  let s = 1;
  let e = Math.floor(x / 2);
  let res = 0;

  while (s <= e) {

    let mid = s + Math.floor((e - s) / 2);

    if (mid ** 2 == x) {
      return mid;
    }
    else if (mid ** 2 > x) {
      e = mid - 1;
    }
    else {
      res = mid;
      s = mid + 1;
    }
  }

  return res;

};