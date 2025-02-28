
// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };

// var sortList = function (head) {

//   // Edge cases : 
//   if (head == null || head.next == null) {
//     return head;
//   }
//   let dummy = new LinkedListNode(-1);
//   let curr = head;

//   while (curr != null) {

//     let forward = curr.next;
//     let prev = dummy;

//     while (prev.next != null && prev.next.data < curr.data) {
//       prev = prev.next;
//     }

//     curr.next = prev.next;
//     prev.next = curr;
//     curr = forward;
//   }
//   return dummy.next;
// };


var sortList = function (head) {

  let dummy = new LinkedListNode(-1);
  let st = head;
  let curr = head.next;
  dummy.next = head;

  while (curr != null) {

    if (curr.data >= st.data) {
      st = curr;
      curr = curr.next;
    }

    else {
      let prev = dummy;
      while (prev.next != null && prev.next.data < curr.data) {
        prev = prev.next;
      }

      st.next = curr.next;
      curr.next = prev.next;
      prev.next = curr;
      curr = st.next;
    }
  }
  return dummy.next;
};




let shift = (arr, k) => {

  for (let i = arr.length; i >= k; i--) {
    arr[i] = arr[i - 1];
  }
  console.log("arr", arr)
  return arr;
}

var createTargetArray = function (nums, index) {


  let target = [];


  for (let i = 0; i < nums.length; i++) {
    if (target[index[i]] != undefined) {
      target = shift(target, index[i]);
    }

    target[index[i]] = nums[i];
  }

  return target;
};

// //console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]))
// console.log(createTargetArray([4, 2, 4, 3, 2], [0, 0, 1, 3, 1]))


var checkIfPangram = function (sentence) {

  let map = new Array(26).fill(false);

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    map[char.charCodeAt() - 97] = true;
  }


  console.log(map);
  for (let i of map) {
    if (i == false) {
      return false;
    }
  }
  return true;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelzydog"));
