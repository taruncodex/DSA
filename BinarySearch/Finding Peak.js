// Finding the First Peak

function peak(arr, n) {
  if (n == 1) return 0;
  if (arr[0] > arr[1]) return n - 1;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  let s = 0;
  let e = n - 2;

  while (s <= e) {
    // console.log(s , e)
    let mid = s + Math.floor((e - s) / 2);

    // peak = mid is greater than its mid+1 && mid-1
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    // when mid on this line \ then its previous will be big than it so the peak is on the s side. moving e here, else moving s
    else if (arr[mid] < arr[mid - 1]) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return -1;
}

function runProgram(input) {
  // Write code here

  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].split(" ").map(Number);

    let ans = peak(arr, n);

    console.log(ans);
  }
}
