// Brute Force Approach :
function func(arr, n, goal) {
  let day = 0;

  while (true) {
    let items = 0;

    for (let i = 0; i < n; i++) {
      items += Math.floor(day / arr[i]);
    }
    if (items >= goal) {
      return day;
    }
    day++;
  }
}

function runProgram(input) {
  // Write code here

  input = input.trim().split("\n");
  let elems = input[0].split(" ").map(Number);
  let n = elems[0];
  let goal = elems[1];
  let arr = input[1].split(" ").map(Number);

  console.log(func(arr, n, goal));
}

// Binary Search Approach :
function func(arr, n, goal) {
  let max = Math.max(...arr);
  let s = 1;
  let e = max * goal;
  let res = -1;

  while (s <= e) {
    let items = 0;
    let mid = s + Math.floor((e - s) / 2);
    for (let i = 0; i < n; i++) {
      items += Math.floor(mid / arr[i]);
    }

    if (items >= goal) {
      res = mid;
      e = mid - 1;
    } else {
      //res = mid;
      s = mid + 1;
    }
    // console.log(mid)
  }

  return res;
}

function runProgram(input) {
  // Write code here

  input = input.trim().split("\n");
  let elems = input[0].split(" ").map(Number);
  let n = elems[0];
  let goal = elems[1];
  let arr = input[1].split(" ").map(Number);

  console.log(func(arr, n, goal));
}
