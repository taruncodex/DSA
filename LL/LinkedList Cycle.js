
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// By using Map 
var hasCycle = function (head) {
    // Rememver the Js do not use Pointer concept ,  everything in he js is Object.
    // So use can not save the pointer directly into the map , you can store it data values 
    if (head == null) {
        return false;
    }
    const map = {};
    let curr = head;
    map[head] = true;
    while (curr != null) {
        if (map[curr.data] == true) {
            return true;
        }
        map[curr.data] = true;
        curr = curr.next;
    }
    return false;
};


// By using Floyd's cycle detection algorithm
var hasCycle = function (head) {

    // Step-1 : handling Edge cases : 1.  when there is no head or only one head that is pointing to null
    //                         2.  if head is pointing to it self 
    // Step-2 :  run the slow pointer by one, fast by two  and if there is and moment when slow and fast pointing to same node return true;

    if (head == null || head.next == null) {
        return false;
    }
    if (head.next == head) {
        return true;
    }

    let slow = head;
    let fast = head;

    while (slow != null && fast != null) {
        fast = fast.next;
        if (fast != null) {
            fast = fast.next;
        }
        slow = slow.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
};