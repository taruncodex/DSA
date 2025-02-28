
  
function NGs(n,arr,order){
  
	let ans=[];
	 ans [n-1] = -1;
	 let s= [];
	 
	 s.push(n-1);
	 
	   for(let i = n-1 ; i >= 0 ; i-- ){
		 while(s.length > 0 &&
			   order=="G"?
			   arr[s[s.length - 1]] <=arr[i] : arr[s[s.length - 1]] >=arr[i]   ){
			 s.pop();
		 }
	 
		 if(s.length == 0){
			 ans[i] = -1;
		 }
		 else{
		  ans[i] = s[s.length-1]  
		 }
		 s.push(i);
	   }
   return ans ;
 }
 
 
 
 function myFun(n,arr){

 let NextGreater = NGs(n,arr,"G");
 let NextSmaller = NGs(n,arr,"S");
 
  let ans = "";
   for(let  i = 0 ; i < n ; i++ ){
 
	 if(NextGreater[i] != -1 && NextSmaller[NextGreater[i]] != -1 ){
	   ans+=  arr[NextSmaller[NextGreater[i]]]+" ";
	 }
	 else{
	   ans+= -1+" ";
	 }
   }
 console.log(ans)
}
 


	function func(n, arr){
		let ans = "";
		
		 for( let i = 0 ; i<n ; i++){
		   
		   let noGreater = true ;
			
		   for(let j = i+1 ; j<n ; j++){
			 
			 if(arr[j] > arr[i]){
				
				 noGreater = false ;
				 let noSmaller = true ;
				  for(let k = j+1 ; k<n ; k++){
				   if( arr[k] < arr[j] ){
					 ans+= arr[k]+" ";
					 noSmaller = false;
					 break ;
				   }
				 }
				  if(noSmaller){
				  ans+= -1+" " ;
				  }
				 
				 break;
			  }
		   }
		   
		   if(noGreater){
			 ans+= -1+" " ;
		   }
		   
		 }
		console.log(ans);
	  } 
	  