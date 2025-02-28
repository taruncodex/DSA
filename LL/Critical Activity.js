/*
class Node {
    constructor(num) {
        this.data = num;
        this.next = null;
    }
}
*/
function nodesBetweenCriticalPoints(head) {


    let prev = head;
    let curr = head.next;
    let forward = curr.next;
    let ans = [];
    let cnt = 1;

    while (forward != null) {

        if (prev.data < curr.data && curr.data > forward.data) {
            ans.push(cnt + 1);
        }
        else if (prev.data > curr.data && curr.data < forward.data) {
            ans.push(cnt + 1);
        }

        prev = curr;
        curr = forward;
        forward = forward.next;
        cnt++;
    }

    if (ans.length < 2) {
        return [-1, -1];
    }

    let min = Infinity;
    let max = ans[ans.length - 1] - ans[0];

    for (let i = 0; i < ans.length; i++) {

        let ele = ans[i + 1] - ans[i]
        if (ele < min) {
            min = ele;
        }

    }

    return [min, max];
}

