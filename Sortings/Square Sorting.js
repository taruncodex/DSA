




function sorting(N ,arr ){
 

 
    for( let i = 0 ; i < N-1 ; i++){
      
      let flag = false ; 
       
       for(let  j = 0 ; j < N-1-i ; j++){
         
         if( arr[j]*arr[j] > arr[j+1]*arr[j+1])
         {
           let temp = arr[j];
           arr[j] = arr[j+1];
           arr[j+1] = temp ;
           flag = true ;
             // console.log(arr)
         }
       }
     
      
      if(!flag){
        break;
      }
      
    } 
    
    console.log(arr.join(" "))
    
   }