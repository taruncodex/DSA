/*

Container with most water

Description  
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).  
Find two lines that together with the x-axis form a container, such that the container contains the most water.  
Note: that you may not slant the container.

Input :
1
9
1 8 6 2 5 4 8 3 7

Output :
49
*/


function mostWater(N,arr){
  
    let s = 0 ;
    let e = N -1 ; 
    let result = 0;
    while(s<e){
      
      let length =  (e-s);
      let breath =   Math.min(arr[s] ,arr[e]);

      let area = length*breath;
      
      result = Math.max(area,result)
      
      if(arr[s] > arr[e]){
        e--;
      }
      else{
        s++;
      }
    }
    console.log(result)  
}