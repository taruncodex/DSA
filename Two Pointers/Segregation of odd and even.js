/*

Segregation of Odd & Even :

Description :
You are given an array, of size $$N$$  
You have to divide the array into two parts, $$even$$ and $$odd$$, such that all the even elements in the array are present in the $$even$$, while all the odd parts in the array are present in the $$odd$$ part  
You are given another integer $$q$$, which has a value of either $$1$$ or $$2$$  
If the value of $$q == 1$$, print all the even elements in the array followed by all the odd elements in the array, otherwise print all the odd elements in the array followed by all the even elements in the array  

Note : The relative order of odd and even elements among themselve should be the same as original array.

Input :
2
5
1 2 3 4 5
1
5
1 2 3 4 5
2

Output :
2 4 1 3 5
1 3 5 2 4


Hint :
In the first sample test case, the value of $$q = 1$$. Therefore, the even numbers are printed first followed by the odd elements, hence the output is $$24135$$.  
In the second sample test case, the value of $$q = 2$$. Therefore, the odd numbers are printed first followed by the even elements, hence the output is $$13524$$.



*/


function seperationOfOddEven(N, arr,Q) {
    //write code here
    
    let odd = [];
    let even = [];
    
    for( let i = 0 ; i< N ; i++){
      if(arr[i]%2==0){
        even.push(arr[i]);
      }
      else{
        odd.push(arr[i]);
      }
    }
  
  let result = "";
    if (Q === 1) {
      result = even.concat(odd).join(" ");
    } 
    else {
      result = odd.concat(even).join(" ");
    }
    
    console.log(result);
    
  }  
  
  
  
  