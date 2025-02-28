// Add two linked lists
/*
Add two Linked Lists

Description  
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.  
You may assume the two numbers do not contain any leading zero, except the number 0 itself.  
Return the head of the updated linked list (In reverse order)  

Input Description  
This is a function complete problem.  
Refer to sample input for understanding  
First Line contains the number of elements in the first linked list (t1)  
Next t1 lines contains a single node of linked list in which the first element is the head  
The next line contains the number of elements in the second linked list (t2)  
Next t2 lines contains a single node of linked list in which the first element is the head



*/
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
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

var addTwoNumbers = function (l1, l2) {
  
  
     let carry = 0 ;
     let sum = 0 ; 
     let head = new ListNode(-1);
     let curr = head;
     
     
     while(l1!=null || l2 != null){
       
       if(l1 == null){
        
         sum = l2.val + carry ;
         l2 = l2.next ;
       }
       else if(l2 == null){
         sum = l1.val + carry ;
         l1 = l1.next ; 
       }
      else{
           sum = l1.val + l2.val + carry ;
           l1 = l1.next ;
           l2 = l2.next ;
       }
       
       
      // console.log("sum: ", sum)
       let digit  = sum%10;
       carry = Math.floor(sum/10);
       
          curr.next = new ListNode(digit);
          curr = curr.next ;
         
     }
     
     if(carry>0){
        curr.next = new ListNode(carry);
          curr = curr.next ;
     }
    return head.next ;
};
