/*

Diversity

Description  
You are given an array of size n containing the income of n families and a diversity constant k.  
You have to choose maximum number of families such that the income of any two families differs by
no more than k to accommodate them in the same society.


Sample Input 1  
2  
6 5  
13 1 17 12 2 15  
3 7  
1 10 20  

Sample Output 1  
4  
1  

Hint  
In the first testcase you can select the families with income [12, 13, 15, 17] to live in the same society.  
In the second testcase you can not choose more than one family as their income difference is always greater than k.




*/

function diversity( n , k ,arr ){

    arr.sort((a,b)=>a-b)
    // console.log(arr)
      
      let s = 0 ;
      let res = 0;
      
  for (let e = 0; e < n; e++) {
        
        // Shrink the window when e-s is greater than k
        while (arr[e] - arr[s] > k) {
          s++; 
        }
        // Store the max value of all window sizes with less then k difference.
        res = Math.max(res, e - s + 1);
      }
      
      console.log(res)
      
    }