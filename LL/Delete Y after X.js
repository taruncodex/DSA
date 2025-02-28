
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


// Implementation-1 
var deleteXAfterY = function(head, n, x, y) {
    
    let curr = head ; 
    
    while(curr != null && curr.next != null){
      
     for(let i = 1 ; i < x && curr.next != null ; i++){
       curr = curr.next ; 
     }
 //    console.log("curr.data: ",curr.data);
     
     let del = curr.next ;
     //console.log("del: ", del.data);
   for(let j = 1 ; j <y && (del != null && del.next != null)  ; j++){
       del = del.next ;
     //  console.log("del2:" , del.data)
     }
     
     
     if(curr.next != null){
       curr.next = del.next ;
        curr = curr.next ;
     }
     else{
       return head ;
     }
      
      //console.log("new del: " , del.data);
    
      // console.log("new curr.data: ",curr.data);
    }
   return head 
};



// Implementation - 2 
var deleteXAfterY = function (head, n, x, y) {

  // Edge Cases 
  if (head == null || head.next == null) {
    return head;
  }

  // Curr to traverse the list 
  let curr = head;

  // Traver 1st node to the end node and perform skip and inclusions
  while (curr != null && curr.next != null) {

    let cnt = x;
    let skip = y;    // So that we can use x,y value again and again

    // While cnt > 1 : include the nodes  and check if our curr becom
    while (cnt > 1 && curr != null) {
      curr = curr.next;
      cnt--;
    }

    if (curr != null && curr.next != null) {
      let forward = curr;
      while (forward != null && skip >= 0) {
        forward = forward.next;
        skip--;
      }

      curr.next = forward;
      curr = curr.next;
    }
  }
  return head;
};
