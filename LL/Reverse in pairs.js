const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var reversePair = function (head) {

  // Step-1 : Create a dummy node and set head to it 
  // Step-2 : set prev , curr 
  // Step-3 : Interate over the LL until curr and curr.next != null
  // Step-4 : Perform following connections :
  // 1 : save the next of current Node
  // 2 : curr next = next.next
  // 3 : next.next = curr 
  // 4 : prev.next = next ; 
  // 5 : prev = curr ; 
  // 6 : curr = curr.next ;

  let prev = new LinkedListNode(-1);
  prev.next = head;
  let curr = head;
  head = prev;


  while (curr != null && curr.next != null) {

    let next = curr.next;
    curr.next = next.next;
    next.next = curr;
    prev.next = next;

    prev = curr;
    curr = curr.next;

  }
  return head.next;
};
