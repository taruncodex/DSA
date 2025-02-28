
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
  
  let curr = head ; 
  let len = 1;
  // Go to the last node and get the length of the list
  while(curr.next!= null){
    curr = curr.next ;
    len+=1 ;
  }
  
   k = k%len ;   
    if(k==0){
      return head ;
    }
    
  // Making the LL circular. 
    curr.next =  head ;
    let iterate = len-k ;
    
    for(let i = 0 ; i < iterate ; i++){
      curr = curr.next ; 
    }
    head = curr.next ;
    curr.next = null ;
    
    return head ;
};

