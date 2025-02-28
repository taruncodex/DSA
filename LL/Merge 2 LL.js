
const ListNode = class {
  constructor(nodeData) {
    this.val = nodeData;
    this.next = null;
  }
};

// Complete the function below
// Approach-1

var mergeTwoLists = function (l1, l2) {


  // Step-1 :  Iterate on both list , node by node and whichever node has the smaller value put it into the Anslist 
  // Step-2 :   if any of the list has node remains then put them intot the answerlist as well.
  let dummy = new ListNode(-1);
  let curr = dummy;

  while (l1 != null && l2 != null) {

    if (l1.val < l2.val) {
      curr.next = new ListNode(l1.val);
      curr = curr.next;
      l1 = l1.next;

    } else if (l1.val > l2.val) {
      curr.next = new ListNode(l2.val);
      curr = curr.next;
      l2 = l2.next;

    } else if (l1.val == l2.val) {
      curr.next = new ListNode(l1.val);
      curr = curr.next;
      l1 = l1.next;
      curr.next = new ListNode(l2.val);
      curr = curr.next;
      l2 = l2.next;
    }

  }

  while (l1 != null) {
    curr.next = new ListNode(l1.val);
    curr = curr.next;
    l1 = l1.next;
  }

  while (l2 != null) {
    curr.next = new ListNode(l2.val);
    curr = curr.next;
    l2 = l2.next;
  }

  return dummy.next;

};



// Approach-2
var mergeTwoLists = function (l1, l2) {

  // Make a dummy node 
  let dummy = new ListNode(-1);
  let temp = dummy;

  while (l1 != null && l2 != null) {

    // if first node has less value then attach that node to dummy and update the l1 else do it for l2
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
      temp = temp.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
      temp = temp.next;
    }

  }

  // if l1 still has node then simply connect themm to temp 
  if (l1 != null) {
    temp.next = l1;
  }

  // if l2 still has node then simply connect themm to temp 
  if (l2 != null) {
    temp.next = l2;
  }

  return dummy.next;
};

