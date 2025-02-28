/*
Valid Stack Sequence

Description  
Given two integer arrays pushed and popped each with distinct values, print "YES" if this could have been the result of a sequence of push and pop operations on an initially empty stack, or "NO" otherwise.

Input Description  

Input Format  
The first line contains the number of testcases - t  
For each testcase:  
The first line contains the number of values - n  
The second line contains the pushed array  
The third line contains the popped array  

Constraints  
1 ≤ t ≤ 10  
1 ≤ n ≤ 10^5  
All elements of pushed and popped are distinct  

Output Description  
Print "YES" if this could have been the result of a sequence of push and pop operations on an initially empty stack, or "NO" otherwise.

Input:
2
5
1 2 3 4 5
4 5 3 2 1
5
1 2 3 4 5
4 3 5 1 2

output:
YES
NO

Hint  
Explanation 1 : We might do the following sequence:  
push(1), push(2), push(3), push(4),  
pop() -> 4,  
push(5),  
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1  
Explanation 2 : 1 cannot be popped before 2.


*/

function validStackSequence(n , arr1 ,arr2){

    let j = 0 ;
    let stack = [] ;
    
    for(let i = 0 ; i <n ; i++){
      
       stack.push(arr1[i]);
       
      while( stack.length > 0 && j<n &&  arr2[j] == stack[stack.length -1]){
        stack.pop();
        j++ ;
      }
    }
    
    if (stack.length === 0){
      console.log("YES")
    }
    else{
      console.log("NO")
    }
} 