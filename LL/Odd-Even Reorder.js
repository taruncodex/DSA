
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const oddEvenList = function (head) {

    let odd = head;
    let even = head.next;
    let dummy = new LinkedListNode(-1);
    let curr = dummy;

    while (odd != null) {
        let ele = odd.data;
        curr.next = new LinkedListNode(ele);
        curr = curr.next;
        if (odd.next != null) {
            odd = odd.next.next;
        } else {
            odd = odd.next;
        }
    }


    while (even != null) {
        let ele = even.data;
        curr.next = new LinkedListNode(ele);
        curr = curr.next;
        if (even.next != null) {
            even = even.next.next;
        } else {
            even = even.next;
        }
    }

    return dummy.next;
};