/*
Description  
Given an array A containing N space-separated integers. Find the first negative integer for each and every window (contiguous subarray) of size K.

Sample Input 1  
2  
5 2  
-8 2 3 -6 10  
8 3  
12 -1 -7 8 -15 30 16 28  

Sample Output 1  
-8 0 -6 -6  
-1 -1 -7 -15 -15 0  

Hint  
For the first test case,  
First negative integer for each window of size 2  
{-8, 2} = -8  
{2, 3} = 0 (does not contain a negative integer)
{3, -6} = -6  
{-6, 10} = -6  

For the second test case,  
First negative integer for each window of size 3  
{12, -1, -7} = -1  
{-1, -7, 8} = -1  
{-7, 8, -15} = -7  
{8, -15, 30} = -15  
{-15, 30, 16} = -15  
{30, 16, 28} = 0 (does not contain a negative integer)

*/



function  FirstNegativeInteger(n, k, arr){
  
    // First create k sized window
    let sum = 0 ;
    for(let left = 0 ; left<k ; left++){
      sum+=arr[left]; // this sum is also do not need in this question as we just need to get the window and do operation on the each ele of the window  sum is not required any where
    }

    // Now check each element for the current window first then after slide the window one by one
    let ans = "";
    for(let i = k ; i<=n; i++){
      
      let s = i-k;
      let e = i ;
      let flag = true ;
       
       while(s<e && s<=n){
          if(arr[s] < 0){
            ans+= arr[s]+" ";
            flag=false;
            break;
          }
          s++;
       }
      if(flag){
        ans+= 0 +" ";
      }
      
      // this sum is not needed in this question
      // our window is not depend on this sum value 
    //  sum+= arr[i]-arr[i-k]; // sliding the window
      
    }
    
       console.log(ans)
       
}

function  FirstNegativeInteger(n, k, arr){
  
  // First creat k sized window
  let sum = 0 ;
  for(let left = 0 ; left<k ; left++){ }

 let ans = "";
  for(let i = k ; i<=n; i++){
    
    let s = i-k;
    let e = i ;
    let flag = true ;
     
     while(s<e && s<=n){
        if(arr[s] < 0){
          ans+= arr[s]+" ";
          flag=false;
          break;
        }
        s++;
     }
    
    if(flag){
      ans+= 0 +" ";
    }
  }
     console.log(ans)
}


function  FirstNegativeInteger2(n, k, arr){
  
  // First creat k sized window
  // let sum = 0 ;
  // for(let left = 0 ; left<k ; left++){
  //   sum+=arr[left];
  // }

  // Now check each element for the current window first then after slide the window one by one
  let ans = "";
  for(let i = k ; i<=n; i++){
    
    let s = i-k;
    let e = i ;
    let flag = true ;
     
       // Shrinking the window till we are not getting any negative number.
        while(s<e && s<=n && arr[s] >= 0 ){
            s++;
         }
      // If we encounter any negative number then store it in the ans.
         if(arr[s]<0 && s<e){
          ans+= arr[s]+" ";
         }
      // If whole window has been shrink and last element is also positive then store 0 in ans.
         else{
          ans+= 0+" ";
         }    
  }   
  console.log(ans); 
}

FirstNegativeInteger2(12, 4,  
  [-8, 2, 3, -6, 10,4,3,-1,2,6,8,-2]  )