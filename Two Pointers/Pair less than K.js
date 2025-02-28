/*
Pair less than K

Description  
You are given an array A of N integers, and an integer K. Find the maximum value of S,
such S that S = a[i] + a[j], and S < K. If no such value exists, then print -1.  
Refer the sample test case for better understanding.



Input :
2
5
1 2 3 4 5
7
3
30 10 20
15

Sample Output 1  
6  
-1  

Hint   :
In the sample test case, in the first test case, the value of K is 7.
The value of S, when i = 0, and j = 4, is 6, which is less than K, and 
largest possible value satisfying all the constraints. Therefore, the output is 6.  
In the second test case, no possible value of S exists which satisfies all the 
required conditions, therefore the output is -1.


*/





function maxPairLessThanK(arr, k) {
    //write code here

    arr.sort((a,b)=> a-b);   //Sorting so that two pointers approach work efficiently .
    let ans = -1;
    
    let s = 0 ; 
    let e = arr.length - 1 ;
    

    while(s<e){
      
     let sum = arr[s]+arr[e];
         if( sum < k ){
           ans = Math.max(ans , sum);  // Taking out the maximum.
           s++;
         }
         else{
           e--;
         }
    }
      console.log(ans) ;
}
