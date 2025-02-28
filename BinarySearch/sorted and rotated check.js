// Recursively finding the minelement  :
function findMin(arr, s, e) {
  // when s and e pointing same index ele [5]
  if (s == e) {
    return s;
  }
  // when s and e are in consecutive [5,1] then . . .
  if (s + 1 == e) {
    if (arr[s] > arr[e]) {
      return e;
    } else {
      return s;
    }
  }

  let mid = s + Math.floor((e - s) / 2);

  // [] // min element is always lied in the unsorted part . We check if min is in sorted part or unsorted part, comparing it with s
  if (arr[mid] > arr[s]) {
    return findMin(arr, mid, e); // when unsorted part at its right
  }
  return findMin(arr, s, mid); // when unsorted part at its left
}

function func(arr, n) {
  // if [1, 2, 3,7 ] our first ele is smaller then last then it can be sorter but
  // definately not rotated.
  if (arr[0] < arr[n - 1]) return false;

  // Find the minIndex
  let minIndex = findMin(arr, 0, n);

  //  check 0 to minIndex-1 if all ele are sorted.
  for (let i = 0; i < minIndex - 1; i++) {
    if (arr[i + 1] < arr[i]) return false;
  }

  // check minIndex to last ele if all ele are sorted or not
  for (let i = minIndex; i < n; i++) {
    if (arr[i + 1] < arr[i]) return false;
  }

  // if everything is fine return true
  return true;
}

function runProgram(input) {
  // Write code here

  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);
  let ans = func(arr, n);

  ans == true ? console.log("YES") : console.log("NO");
}

// <--- FINDING MIN ELEMENT WITHOUT RECURSSION --->

function func(arr, n) {
  let s = 0;
  let e = n - 1;

  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);

    // when   mid-1 > mid < mid+1 then mid is minEle
    if (arr[mid] < arr[(mid - 1) % n] && arr[mid] < arr[(mid + 1) % n]) {
      return mid;
    }
    // when s < mid  < e then,  s will be the minEle .
    if (arr[s] <= arr[mid] && arr[mid] <= arr[e]) {
      return s;
    }

    // go into the unsorted part :
    if (arr[s] <= arr[mid]) {
      s = (mid + 1) % n;
    } else {
      e = (mid - 1) % n;
    }
  }

  return -1;
}
