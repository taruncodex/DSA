/*
Optimise the curve

Description  
Ross is skilled in calculations, he can do most of the complex calculations in head but he is stuck with this question and wants your help.  
Ross wants to solve the given mathematical equation which states that, he needs to find the least non-negative integer X₀, that shall make the value of given equation atleast K i.e.,  
A X₀² + B X₀ + C >= K  
He is given A, B, C and K, which form the above equation. He has to answer T independent test cases.  
Output -1 if there is no possible positive value of X₀  

Input Description  
Input Format :  
Number of test cases, space separated values of A B C K respectively

Constraints :  
- A, B, C <= 100000  
- K <= 10000000000  
- T <= 100000  

Output Description  
The value of X₀  

Sample Input 1  
1  
3 2 4 15  

Sample Output 1  
2

*/

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
