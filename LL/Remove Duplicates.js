const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
    
    if(head == null || head.next == null){
      return head;
      }
   let curr = head;
    while (curr != null && curr.next != null) {
        while (curr.next != null && curr.data == curr.next.data) {
            curr.next = curr.next.next;
        }
        curr = curr.next;
    }
    return head;
};




// Complete the function below

var deleteDuplicates = function(head) {
    
    if(head == null || head.next == null){
      return head;
      }
   let curr = head;
    while (curr != null && curr.next != null) {
        if( curr.data == curr.next.data) {
            curr.next = curr.next.next;
        }else{
          curr = curr.next;
        }
        
    }
    return head;
};
