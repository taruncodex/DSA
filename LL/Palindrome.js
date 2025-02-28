const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below
function reverseL(head){
  
  if(head == null || head.next == null){
    return head ;
  }
  
  let curr = head;
  let prev = null;
  
  
  while(curr != null){
    let forward = curr.next;
      curr.next = prev;
      prev = curr ; 
      curr = forward ; 
  }
  return prev ;
}

var isPalindrome = function (head) {
    
   let curr = head ; 
   let  l1 =  new LinkedListNode(-1) ;
   let curr2 = l1 ;
   
   while(curr != null ){
     let ele = curr.data;
     curr2.next = new LinkedListNode(ele);
     curr2 = curr2.next ;
     curr = curr.next ;
   }
    // console.log(head)
     l1 = reverseL(l1.next);
     //console.log(l1)
     curr = head;
     while(curr != null){
       if(curr.data != l1.data){
         return false ;
       }
       curr = curr.next ;
       l1 = l1.next ;
     }
     
return true
};