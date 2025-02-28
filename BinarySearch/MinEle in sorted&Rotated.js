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

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);

  let i = func(arr, n - 1);
  console.log(arr[i]);
}
