/* 
Such Pair Returns

Description  
For each test case, you are given N integers and K, your task is to write a program 
that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).

Input 
1
5 2
3 4 0 2 7
Output:
1
*/


function findPair(arr, n, k) {
    //write code here
    
   arr.sort((a,b)=> a-b);
   
   let ans = -1
   let s = 0 ; 
   let e = arr.length - 1 ;
   
   while(s<e){
     
         let sum = arr[s]+arr[e];
         
         if( sum == k ){
           ans = 1 ;
           s++;
        }
         else if( sum < k ){
           s++;
        }
         else if(sum>k){
           e-- ;
        } 
   }

  console.log(ans)
}


// <--- Apporach - 2 --->
function findPair(arr, n, k) {
    //write code here
    
    let s = new Set();
    let ans = -1;
    
    for(let i =0 ; i<n ; i++){
      
           if(s.has(k-arr[i]))
           {
             ans = 1;
             break ;
           }
           
           s.add(arr[i]);
    }
    console.log(ans)
}