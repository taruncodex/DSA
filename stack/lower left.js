let arr = [2,3, 5,7,2, 4,8,5,3]
let n  = arr.length;

function nearestSmallerLeft(n,arr){
let ans=[];     // our result array
ans [0] = -1;   // first value will always be -1 
let s = [];     // our stack that will be used for comparison for current values 
s.push(0);      // first value of stock is always 0

  for(let i = 1 ; i < n ; i++ ){
    
    while(s.length > 0 && arr[s[s.length - 1]] >=arr[i]){
        s.pop();
    }

    if(s.length == 0){
        ans[i] = -1;
    }
    else{
     ans[i] = arr[s[s.length-1]]  
    }
    s.push(i);
  }
  return ans  ;
} 
console.log(nearestSmallerLeft(n,arr)); 


//
function nearestGreaterLeft(n,arr){
    let ans=[];
    ans [0] = -1;
    let s= [];
    s.push(0);
    
      for(let i = 1 ; i < n ; i++ ){
        while(s.length > 0 && arr[s[s.length - 1]] <=arr[i]){
            s.pop();
        }
    
        if(s.length == 0){
            ans[i] = -1;
        }
        else{
         ans[i] = arr[s[s.length-1]]  
        }
        s.push(i);
      }
      return ans  ;
} 
    
 console.log(nearestGreaterLeft(n,arr)); 



function nearestSmallerRight(n,arr){
let ans=[];
ans [n-1] = -1;
let s= [];
s.push(n-1);

  for(let i = n-1 ; i >= 0 ; i-- ){
    while(s.length > 0 && arr[s[s.length - 1]] >=arr[i]){
        s.pop();
    }

    if(s.length == 0){
        ans[i] = -1;
    }
    else{
     ans[i] = arr[s[s.length-1]]  
    }
    s.push(i);
  }
  return ans  ;
} 

console.log(nearestSmallerRight(n,arr)); 



function nearestGreaterRight(n,arr){
    let ans=[];
    ans [n-1] = -1;
    let s= [];
    s.push(n-1);
    
      for(let i = n-1 ; i >= 0 ; i-- ){
        while(s.length > 0 && arr[s[s.length - 1]] <= arr[i]){
            s.pop();
        }
    
        if(s.length == 0){
            ans[i] = -1;
        }
        else{
         ans[i] = arr[s[s.length-1]]  
        }
        s.push(i);
      }
      return ans  ;
    } 
    
console.log(nearestGreaterRight(n, arr));
