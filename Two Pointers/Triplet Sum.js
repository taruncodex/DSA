/*

# Triplet Sum

## Description  
Given an array of integers, find if there exists two numbers in the array whose sum is equal to a third number $$c$$, which is also present in the array.  
i.e. $$a + b = c$$  
If there exist any such triplet in the array output $$1$$ else output $$0$$.  

Note: $$a, b, c$$ all need to be at different indices, i.e. you cannot use any element twice.

Input :
1
5
1 3 2 4 5

Output :
1


*/



function triplet_Sum(N, arr) {

  // Step-1 : Sort the array
  // Step-2 : take each element of the array from position 2 to N and called it C
  // Step-3 : sum each element from 0 to C-1  and check if any pair sum is equal to C  . return 1 if yes, else 0

  arr.sort((a, b) => a - b);
  let ans = 0;
  for (let k = 2; k < N; k++) {
    let c = arr[k];
    let s = 0;
    let e = N - 1;
   
    while (s < e) {
      if (arr[s] + arr[e] === c) {
        ans = 1;
        break;
      }
      else if (arr[s] + arr[e] > c) {
        e--;
      }
      else {
        s++;
      }
    }
    
    if (ans) {
      break;
    }
  }
  console.log(ans)
}


function triplet_Sum2(N, arr) {
  arr.sort((a, b) => a - b);
  let ans = -1;
  let s = 0;
  let e = N - 1;
  let obj = {};
  for (let i of arr) {
    obj[i] = (obj[i] || 0) + 1;
  }
  while (s < e) {
    let ele = arr[s] + arr[e];
    if (obj.hasOwnProperty(ele) && obj[ele] > 0) {
      ans = 1;
      break;
    }
    else {
      e--;
    }
  }
  console.log(ans)
}


triplet_Sum2(5, [1, 3, 2, 4, 5])

