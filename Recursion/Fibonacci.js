function fun(val){
    if(val == 0){
      return 0 ;
    }
    if(val == 1){
      return 1 ;
    }

    return fun(val-1) + fun(val-2);
    
  }
  
  