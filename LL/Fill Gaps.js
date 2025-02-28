const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var fillGaps = function (head) {

 
 let curr = head ;
 
 while(curr.next != null){
   
   let forward = curr.next ;
    //console.log(curr.data - forward.data)
   while(curr != null && (forward.data - curr.data) > 1){
     let val = curr.data ;
     //console.log("val",val )
    // console.log("I am")
     curr.next = new LinkedListNode(val+1);
    // console.log("newNode: " , curr.next.data);
     curr = curr.next ;
    // console.log(forward.data - curr.data)
     //console.log(curr.next)
   }
   
   
   curr.next  = forward;
   curr = curr.next ;
 }
 
return head

    
};