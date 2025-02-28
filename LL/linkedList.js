// Class to create a Node
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
 }


  
  // Class to create and manage the Linked List
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Method to insert at the beginning
    insertAtHead(data) {
      const temp = new Node(data);
      temp.next = this.head;
      this.head = temp ;
    }
  
    // Method to insert at the end
    insertionAtEnd(data) {
      const temp = new Node(data);
      if (this.head === null) {
        this.head = temp;
        return;
      }
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = temp;
    }
  
    // Method to insert at a specific position
    insertAtPosition(pos, data) {
      if (pos === 1) {
        this.insertAtHead(data);
        return;
      }
  
      let cnt = 1;
      let curr = this.head;
      const newNode = new Node(data);
      while (cnt < pos - 1) {
        curr = curr.next;
        cnt++;
      }
  
      if (curr.next === null) {
        this.insertionAtEnd(data);
      } else {
        newNode.next = curr.next;
        curr.next = newNode;
      }
    }
  
    // Method to print the linked list
    print() {
      let temp = this.head;
      if (temp === null) {
        console.log("The list is empty");
        return;
      }
  
      while(temp !== null) {
        process.stdout.write(temp.data + " ");
        temp = temp.next;
      }
      console.log();
    }
  
    // Method to delete the first node
    del_F_Node() {
      if (this.head === null) return;
      const temp = this.head;
      this.head = this.head.next;
      temp.next = null;
    }
  
    // Method to delete the last node
    del_L_Node() {
      if (this.head === null || this.head.next === null) {
        this.head = null;
        return;
      }
      let tail = this.head;
      let prev = null;
      while (tail.next !== null) {
        prev = tail;
        tail = tail.next;
      }
      prev.next = null;
    }
  
    // Method to delete a node at a given position
    del_Given_Node(pos) {
      if (this.head === null) return;
      if (pos === 1) {
        this.del_F_Node();
        return;
      }
  
      let curr = this.head;
      let prev = null;
      let cnt = 1;
      while (cnt < pos) {
        prev = curr;
        curr = curr.next;
        cnt++;
      }
      if (curr === null) return;
      prev.next = curr.next;
      curr.next = null;
    }

    addOne(head){

    }


  }


  
  // Create the instance of LL
  const list = new LinkedList();

  // Now creating , deleting , adding in LL.
  list.insertAtHead(5);
  list.insertAtHead(1);
  list.insertionAtEnd(2);
  list.insertAtPosition(2, 3);
  list.insertAtHead(6);
  list.print();


  // list.del_F_Node();
  // list.print();
  // list.del_L_Node();
  // list.print();
  // list.del_Given_Node(2);
  // list.print();
  
