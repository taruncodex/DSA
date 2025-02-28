/*
Input: 
10
1 2 4 3 5 7 8 6 9 10

Output:
1 2 4 5 7 8 9 10

*/


function sorting(N,arr){
  
    let j = 0 ;
    
    while(j < N-1)
    {
      if(arr[j]>arr[j+1]){
        arr.splice(j+1,1);
      }
      else{
        j++;
      }
      
    }
    console.log(arr.join(" "))
}
  


function sorting2(N,arr){
  let ans = "";
  for(let i = 0 ; i<N ; i++){
    if(arr[i]<arr[i-1]){
    continue;
    }
    else{
    ans+=arr[i];
    }
  }
  console.log(ans)
}

dd(10 ,[1, 2 ,4, 3, 5, 7, 8, 6, 9, 10])