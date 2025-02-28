/*
Remove duplicates :


Description  : 
Given an array of n integers, the array is sorted. You have to remove the duplicates, print only unique elements, do it in place. i.e O(1) space

Input Description  
1 <= T <= 10  
1 <= N <= 100000  
1 <= Ai <= 100000




Input :
2
3
1 1 2
4
1 1 3 3

Output :
2
1 2
2
1 3

*/

function removeDuplicates(N, arr) {

  let i = 0;
  for (let j = 0; j <= N - 2; j++) {
    if (arr[j] != arr[j + 1]) {
      arr[i] = arr[j];   // if element is not equal to its next then add it into ith place and increase i
      i++;
    }
  }

  //Handling last case separetly. 
  arr[i] = arr[N - 1];

  let ans = "";
  for (let j = 0; j <= i; j++) {
    ans += arr[j] + " ";
  }

  console.log(i + 1);
  console.log(ans);
}


function removeDuplicates(N, arr) {
  // Step-1 : start s and e from the beginning, increment e one by one and check with the s 
  // Step-2 : If arr[s] and arr[e] both are equal then move e , 
  // Step-3 : When arr[s] and arr[e] are not equal then store the value of arr[s] and  

  let s = 0;
  let e = 0;
  let i = 0;

  while (e < N) {
    if (arr[s] == arr[e]) {
      e++;
    }
    else {
      arr[i++] = arr[s];
      s = e;
    }
  }

  arr[i++] = arr[N - 1];
  arr.splice(i, N - i)
  console.log(i)
  console.log(arr.join(" "))

}

function runProgram(input) {

  input = input.trim().split("\n");
  let tc = input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let N = input[line];
    line++;
    let Arr = input[line].trim().split(" ").map(Number);
    line++;
    removeDuplicates(N, Arr);
  }
}

