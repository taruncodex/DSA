const LinkedListNode = class {
   constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
   }
};


// Complete the function below
var checkWavePattern = function (head) {

   // if 3 consicutive nodes are in asending ordeeer or desending order then return false
   // if no such situation comes then the LL is in the wave form
   let curr = head;

   while (curr != null && curr.next != null && curr.next.next != null) {
      if (curr.data <= curr.next.data && curr.next.data <= curr.next.next.data) {
         return false;
      }
      else if (curr.data >= curr.next.data && curr.next.data >= curr.next.next.data) {
         return false;
      }
      curr = curr.next.next;
   }
   return true;
};



// Complete the function below
var checkWavePattern = function (head) {
   let curr = head;
   while (curr.next != null && curr.next.next != null) {

      if ((curr.data > curr.next.data) && (curr.next.data < curr.next.next.data)) {
         curr = curr.next.next;
      }
      else if ((curr.data < curr.next.data) && (curr.next.data > curr.next.next.data)) {
         curr = curr.next.next;
      }
      else {
         return false;
      }
   }
   return true;
};
