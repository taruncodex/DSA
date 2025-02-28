
/*

Minimum Expenses

Description  
You are given an array of N integers, such that it denotes the number of rupees spent by Stanley for N days.  
You have to find the minimum amount of money he has spent on K consecutive days.  
Declare a variable with the name Stanley, and find the minimum amount of money that he has spent during a consecutive period of K days.

Note: The days in which he earns more money than what he spends ar given as the negative number in the array.


Sample Input 1  
2  
5 3  
9 9 -5 9 5  
5 4  
2 7 6 2 -5  

Sample Output 1  
9  
10  

Hint  
For the first test case the different amount of money spent on K consecutive days is: 13 13 9, and minimum is 9, hence the output is 9.  
For the second test case the different amount of money spent on K consecutive days is: 17 10, and minimum is 10, hence the output is 10.



*/

// we are just create a window and cal its sum then we slide the window and cal the sum of each window and then which have hte largest value in our ans
function minimumExpenses(N, k, arr){
  
    let sum = 0 ;
    let res = Infinity ;
      
      
    for( let e = 0 ; e<k ; e++ ){
     sum+= arr[e];  
    }
    
    res = Math.min(res,sum); // storing the first sum of 3 consecutive day's sum.
    
    for( let i=k ; i<N ;i++)  
    {
      // let s = i-k;
      // let e = i;
      sum+= arr[i]- arr[i-k] ;
      res = Math.min(res,sum);
    }
   console.log(res);
  }
  

  // Opposite of the above question : Maximum sum of the fixed size window
  function maxSubarray(n , k, arr){
  
    let sum = 0 ;
    let res = 0 ;
    for( let e = 0 ; e < k; e++ ){
      sum += arr[e];
    //  console.log(sum)
    }

    res = Math.max(res, sum); // storing the first sum of 3 consecutive day's sum.
    
    for( let i=k ; i<n; i++){
      sum+= arr[i] - arr[i-k];
      res = Math.max(res, sum);
      // console.log(sum , res )
    }
    
    console.log(res);
  }




