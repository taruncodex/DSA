
function fun(num){
  
    //Invalid case
    if(num == 0){
        return 1 ;
    }
    //Valid Case
    if(num<0){
        return 0 ;
    }
    //Return 
    else{
        return fun(n-1) + fun(n-2) + fun(n-5) ;
    }
}