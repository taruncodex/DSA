/*
Subarrays Problem

Description  
You are given an array A of N elements. Write a program that counts the number of sub-arrays of A in which sum of all the elements is an even number.  
Please read sample test case and its explanation for better understanding.


Sample Input 1  
5  
2 5 4 4 4  

Sample Output 1  
7  

Hint  
Output Explanation :  
All the even sum subarrays are:  
1) [1,1] (i.e from index 1 to index 1)  
2) [3,5] (i.e from index 3 to index 5)  
3) [3,4] (i.e from index 3 to index 4)  
4) [4,5] (i.e from index 4 to index 5)  
5) [1,3] (i.e from index 1 to index 3)  
6) [4,4] (i.e from index 4 to index 4)  
7) [5,5] (i.e from index 5 to index 5)

*/


function countEvenSumSubarrays(arr, n) {
  //write code here

  let s = 0;
  let cnt = 0;

  let currSum = 0;

  for (let e = 0; e < n; e++) {

    currSum = arr[e];

    // While the window sum is odd shrink the window. 
    while (currSum % 2 == 1 && s < n && s<e) {
      currSum -= arr[s];
      s++;
    }
    cnt += e - s + 1;
  }
  console.log(cnt)

}