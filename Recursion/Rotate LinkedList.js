
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
    
  if(head == null || head.next == null || k== 0){
    return head ;
  }
    
  // Taking the length and making the LL circular 
  let curr = head ; 
  let  len = 1 ;
  while(curr.next!= null){
    curr = curr.next ;
    len+=1 ;
  }
  
  k = k%len ;  // Endge case when k > len 
  if(k==0){
    return head ;
  }
    
// Making the LL circular. 
  curr.next =  head ;
 
  // iterating the LL till the point from wherer our new head should point.
  let iterate = len-k ;
  for(let i = 0 ; i<iterate ; i++){
    curr = curr.next ; 
  }
    
  head = curr.next ;   // New head   
  curr.next = null ;   // Making the LL singular
  
  return head ;
};
