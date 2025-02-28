let arr = [1,2,3,4,5];


function fun(arr,n){

    if(n <= 1){
         return ;
    }

    let temp = [] ; 
    for(let i = 0 ; i < n-1 ; i++){
        temp[i] = arr[i] +arr[i+1 ];
    }

     fun(temp , n-1);

     console.log(temp)
}
fun(arr, 5) ; 