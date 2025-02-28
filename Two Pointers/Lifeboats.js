/*

Lifeboats

Description  
Given n passengers who are going to board the ship for a journey. You are the captain of the ship and are responsible for the safety of the passengers.  
You have an array W of size n which has weights of all the passengers. For ensuring the safety of the passenger, you are required to calculate the minimum number of lifeboats needed for the journey.  
Each lifeboat can carry at most 2 people at the same time, provided the sum of the weights of those people is within the limit k. (Max holding capacity of a lifeboat).  
It is ensured that each person can be carried by a lifeboat.

Input : 
2
4 5
3 5 3 4
4 3
1 2 2 3

output :
4
3


*/

function minLifeboats(arr, n, k) {
    //write code here
    arr.sort((a,b)=> a-b)
    
    let s = 0 ;
    let e = n-1 ;
    let cnt = 0;
    
    while(s<=e){
      
      if(arr[s]+arr[e] <= k){
        cnt++ ;
        s++ ; 
        e--;
      }
      else if( arr[s]+arr[e] > k ){
        cnt++ ;
        e--;
      }
      
    }
    
    console.log(cnt)
    
}