/*

Gifts

Description :
Given an array A of size n, which contains gift ids of various gifts kept in a row. You can select any subarray of gifts that contains all unique gift id.
What is the longest sequence of successive gifts where each gift id is unique?


Output Description :
For each test case, print the answer: The length of the required subarray.

Sample Input 1
3
8
1 2 1 3 2 7 4 2
5
1 2 1 3 4
4
1 2 2 1

Sample Output 1
5
4
2


*/



/*

*/

// Function to find the length of the longest unique subarray

function longestUniqueSubarray(arr, n) {
  // write code here

  let s = 0;
  let obj = {};
  let res = 0;
  for (let e = 0; e < n; e++) {
    let ele = arr[e];
    // tracking of the object
    obj[arr[e]] = (obj[arr[e]] || 0) + 1;

    // When any element is encounter second time then make map clear till e 
    while (obj[arr[e]] > 1 && s <= e && e < n) {
      obj[arr[s++]] -= 1;   // As the number is repeated so clear the map till the value of e.
    }
    res = Math.max(res, e - s + 1);
  }
  console.log(res);
}

function longestUniqueSubarray(giftes, n) {
  // write code here 
  let s = 0;
  let map = {};
  let ans = 0;
  for (let e = 0; e < n; e++) {
    let ele = giftes[e];
    map[ele] = (map[ele] || 0) + 1;
    
    while (map[ele] > 1 && e < n && s <= e) {
      map[giftes[s]] -= 1;
      s++;
    }
    ans = Math.max(ans, e - s + 1)

  }
  console.log(ans);
}