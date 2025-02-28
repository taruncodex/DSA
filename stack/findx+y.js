/*
Can you find the sum

Description  
Teena is very good at competitive programming, she solved enough problems on arrays and her friend wants to test her knowledge in arrays, so gave her following task :  
The problem is given an array A having N integers, for each element i (1 <= i <= N), find x+y where x is the largest number less than i such that A[x] > A[i] and y is the smallest number greater than i such that A[y] > A[i].  
If there is no x < i such that A[x] > A[i], then take x = -1. Similarly, if there is no y > i such that A[y] > A[i], then take y = -1.  

Input Description  
Input Format  
First line consists of a single integer denoting N.  
Second line consists of N space separated integers denoting the array A.  

Constraints  
1 <= N <= 10^6  
1 <= A[i] <= 10^9  

Output Description  
Print N space separated integers, denoting x+y for each i



Sample Input 1  
5  
5 4 1 3 2  

Sample Output 1  
-2 0 6 1 3  

Hint  
Sample 1 Explanation  
Values of x for each i: -1, 1, 2, 2, 4  
Values of y for each i: -1, -1, 4, -1, -1  
So, x+y for each i: -2, 0, 6, 1, 3

*/


function myfun(n, arr) {
  
    // x is greater to left so use nearest greater to its left
    let x = [] ;
    x[0]  = -1 ;
    let s = [] ;
    
    s.push(0);
    
      for(let i = 1 ; i < n ; i++ ){
        while(s.length > 0 && arr[s[s.length - 1]] <=arr[i]){
            s.pop();
        }
    
        if(s.length == 0){
            x[i] = -1;
        }
        else{
           x[i] = s[s.length-1]+1  //1-based index.
         }
        s.push(i);
      }
      
      // y is greater to right value so apply Nearest greater to it's right 
      s = [];
      let y = [];
      y[n-1]= -1;
      s.push(n-1);
 
       for(let i = n-2; i >= 0 ; i--){
        
        while(s.length>0 && arr[s[s.length -1]]<=arr[i]){
          s.pop();
        }
        
        if(s.length ==0){
          y[i] = -1;
        }
        else{
          y[i] = s[s.length -1]+1;   // remember this point , it's 1 index based 
        }
        s.push(i);
       }

     let ans = ""
     for(let i = 0 ; i<n ;i++){
        ans += x[i]+y[i]+" ";
     }
    console.log(ans)
}