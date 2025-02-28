
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// <--- Insert a Node at head --->
function insertNodeAtHead(head, data) {
    // Step : 1  Handle Edge case wheen head is null
    // Step : 2  create the new Node
    // Step : 3  set next of newNode = head and point head to newNode
    if (head == null) {
        return new LinkedListNode(data);
    }
    const newNode = new LinkedListNode(data);
    newNode.next = head;
    head = newNode;
    return head;
}

// <--- Insert a Node at a specific Position --->
function insertNodeAtPosition(head, data, position) {
    // Step 1 : Handle edge Cases when head is null & position is at zero
    // Step 2 : traverse untill go to the one node beafore the insertion position
    // Step 3 : create a node and add it between current node and next node

    // Step : 1 
    if (head == null) {
        const newNode = new LinkedListNode(data);
        return newNode;
    }
    if (position == 0) {
        const newNode = new LinkedListNode(data);
        newNode.next = head;
        head = newNode;
        return head
    }
    // Step : 2 
    let curr = head;
    while (position > 1) {
        curr = curr.next;
        position--;
    }
    // Step : 3
    const newNode = new LinkedListNode(data);
    newNode.next = curr.next;
    curr.next = newNode;
    return head;
}

// <--- Insert a Node at the Tail --->
function insertNodeAtTail(head, data) {

    // Step :1 Handle the edge case when head == null
    // Step :2 travese until curr.next != null
    // step :3 create a new node and point last node's next toward the newNode
    if (head == null) {
        return new LinkedListNode(data);
    }
    let curr = head;
    while (curr.next !== null) {
        curr = curr.next;
    }
    const newNode = new LinkedListNode(data);
    curr.next = newNode;
    return head;
}



// <--- Get the middle Node --->
var middleNode = function (head) {

    // Floyd’s Algorithmm
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
};



// <---  Delete the Middle Node --->
var deleteMiddle = function (head, n) {

    // Step -1 : Go to one before to the middle position
    // Start fast = one step ahead from slow and go till fast.next != null && fast.next.next != null 
    // Step - 2 : Delete the Middle Node 
    let slow = head;
    let fast = head.next;

    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;
};


// <---  Delete node at a specific Position --->
function deleteNode(head, position) {
    // Step 1 : Use curr to point to the head
    // Step 2 : iterate over the LL till position is not equal to 1 ;
    // Step 3 : Skip the next node of the list by assining curr.next = curr.next.next;
    let curr = head;
    while (position !== 1) {
        curr = curr.next;
        position--;
    }
    curr.next = curr.next.next;
    return head;
}



// <--- Nth node from the End --->
// Approch-1 
function len(head) {
    let l = 0;
    while (head != null) {
        l++;
        head = head.next;
    }
    return l;
}
function nth_node(head, n) {
    if (head == null || head.next == null) {
        return head;
    }
    let l = len(head);
    let i = l - n;
    let curr = head;
    while (i > 0) {
        curr = curr.next;
        i--;
    }
    return curr.data;
}

//Approach-2 By reversing the LL

// Approach-3 floyd's algorithm
function nth_node(head, n) {

    let fast = head;
    let slow = head;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast != null && slow != null) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow.data;
}

