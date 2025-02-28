/*
Two Sorted Arrays

Description :
You are given two arrays A and B, each of size N.  
The first array A, is sorted in ascending order, while the second array is sorted in descending order.  
You have to find the number of elements common in both the arrays.  
Try to solve this without using any extra space.


Sample Input 1  
1  
6  
1 2 2 3 4 5  
4 4 3 2 1 1  

Sample Output 1  
4

*/


//4 Test cases are failing : (12th question of Two Pointers Assignment.)

function findCommonElements(A, B, n) {
 //write code here
 
 let s = 0 ; 
 let e= n-1;
 let cnt = 0;
 
 while(s < n && e >= 0 ){
   
   if(A[s]==B[e]){
     cnt++;
     s++;
     e--;
   }
   else if(A[s] > B[e]){
     e--;
   }
   else if (A[s] < B[e]){
     s++;
   }
   
 }
 
 console.log(cnt) ;

}
