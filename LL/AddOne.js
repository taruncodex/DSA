const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

function reverse(head) {
  let curr = head, prev = null, next;
  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

var addOneToLinkedList = function (head) {

  // Step -1 : Reverse the Array
  // Step -2 : Add carry=1 into the first node and if the sum is greater then equal to 10 then 
  // set the value of carry = 1 and add it into the next node's  data and repeat the same process until LL in not ended.


  head = reverse(head);
  let prev = null; // used when we have carry ,Even the list is ended.
  let curr = head;
  let carry = 1;
  //let num = curr.data+1;
  //jbtk curr me data  or humare pass carray bhi H toh hum plus krte rahenge.

  while (curr != null) {

    let sum = curr.data + carry;

    sum >= 10 ? carry = 1 : carry = 0;
    digit = sum % 10;
    curr.data = digit;
    prev = curr;
    curr = curr.next;

    if (carry == 0) {
      break;
    }
  }
  // If still carry remains then :- 
  if (carry > 0) {
    prev.next = new LinkedListNode(carry);
  }

  head = reverse(head);
  return head;

};



