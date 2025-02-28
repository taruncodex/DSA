// Function to count the number of subarrays with sum less than M
function countSubarraysWithSumLessThanM(arr, n, m) {
    //write code here
    
    
    let s =  0 ;
    let e = 0 ;
    let sum = 0 ;
    let cnt = 0;
    
    for( let e = 0 ; e<n ; e++)
    {
      sum+= arr[e];
      
      while(sum>=m && s<n && e<n){
        
        sum-= arr[s]
        s++;
      }
       cnt+=e-s+1 ;  // here cnt is constantly adding its previous counts so its able to count the subarrays correctly.
    }
    console.log(cnt)
}



/*
Subarrays Having Sum Less Than M

Description
Given an array A of size n with positive numbers, find the total number of subarrays that have sum < m.

1
5 5
1 5 1 3 2

5

*/

countSubarraysWithSumLessThanM(arr,n,k)