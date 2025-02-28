function lower(arr, n, k) {
  let s = 0;
  let e = n - 1;
  let res = Infinity;

  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);

    if (arr[mid] == k) {
      res = Math.min(res, mid);
      e = mid - 1;
    } else if (arr[mid] > k) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  if (res == Infinity) {
    return -1;
  }
  return res;
}

function higher(arr, n, k) {
  let s = 0;
  let e = n - 1;
  let res = -1;

  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);

    if (arr[mid] == k) {
      res = Math.max(res, mid);
      s = mid + 1;
    } else if (arr[mid] > k) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return res;
}

function runProgram(input) {
  // Write code here

  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);

  let k = +input[2];

  let l = lower(arr, n, k);
  let h = higher(arr, n, k);

  console.log(l, h, h - l + 1);
}
