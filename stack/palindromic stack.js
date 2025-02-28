function checkPalindrome(str){
  
    let s = [] ;
    let ans = true ;
    
    let mid = Math.floor(str.length / 2) ;
    
   // console.log(mid);
   let i = 0 ;
   
   while(i<mid){
      s.push(str[i]);
      i++ 
    }
    
    //handling even part.
    if(str.length%2 == 1){
      i++ ; 
    }
  
    
    while(i < str.length){
      let ele = s.pop();
      if(ele != str[i]){
        ans = false ;
        break;
      }
      i++;
    }
    
    if(ans){
      console.log("YES");
    }
    else{
      console.log("NO");
    }
    
    
  }