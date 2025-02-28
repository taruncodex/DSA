// Function to check if there is a subarray with sum K
function findSubarrayWithSumK(arr, n, k) {
  // write code here

  //Step-1 : expand the window until sum is smaller then K
  //Step-2:  When sum got greater then K , shrink the window
  // Step-3:  when sum == k return true ; 


  let s = 0; //use to remove first ele of from the window (sliding window by start)
  let sum = 0;
  let flag = false;

  for (let e = 0; e < n; e++) {
    sum += arr[e];    

    while (sum > k && s <= e) {   //When sum got greater then K , shrink the window
      sum -= arr[s];
      s++;
    }
   
    if (sum == k) {     // checking the condition 
      flag = true;
      break;
    }
  }

  if (flag) {
    console.log("Yes");
  }
  else {
    console.log("No");
  }
}



function sumOfArray(n, k, arr) {
  let sum = 0;
  let s = 0;
  let ans = false;

  for (let e = 0; e < n; e++) {
    sum += arr[e];

    if (sum > k) {
      while (sum > k && s < n) {
        sum -= arr[s];
        s++;
      }

    }

    if (sum == k) {
      ans = true;
    }
  }

  if (ans) {
    console.log("Yes");
  }
  else {
    console.log("No")
  }
}


/*

    Input :
3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1

output : 
Yes
No
Yes 

*/