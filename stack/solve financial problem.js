function func(n ,arr){
 
    let ans = [];
    ans[0] = 1;
    
    let stack = [];
    stack.push(0);
    
    for( let i = 1 ; i<n ; i++){
      
     // console.log(stack , arr[stack[stack.length -1] ])
      
      while(stack.length > 0 && arr[stack[stack.length -1] ] <= arr[i] ){
        
        stack.pop();          // one ele is deleted from the staxk and its length also get decreased.
  
      }
      
      if(stack.length == 0){
        ans[i] = i+1 ;  
      }
      else{
        ans[i]= i - stack[stack.length-1] ;
      }
      
      
      
      stack.push(i);
  
    }
    
    
   console.log(ans.join(" "))
   
  }