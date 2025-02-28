function partition(arr, s, e) {
  let pivot = s; // First index as pivot
  let cnt = 0;

  // Count elements smaller than pivot within [s, e]
  for (let i = s + 1; i <= e; i++) {
    if (arr[i] < arr[pivot]) {
      cnt++;
    }
  }

  // Place pivot at the correct position
  let pivotIndex = s + cnt;
  [arr[pivot], arr[pivotIndex]] = [arr[pivotIndex], arr[pivot]];

  // Partition the array
  pivot = pivotIndex;
  while (s < pivot && e > pivot) {
    while (arr[s] <= arr[pivot]) s++;
    while (arr[e] >= arr[pivot]) e--;

    if (s < pivot && e > pivot) {
      [arr[s], arr[e]] = [arr[e], arr[s]];
    }
  }

  return pivot;
}

function quickSort(arr, s, e) {
  if (s < e) {
    let pivotIndex = partition(arr, s, e);
    quickSort(arr, s, pivotIndex - 1); // Left of pivot
    quickSort(arr, pivotIndex + 1, e); // Right of pivot
  }
}




function partition(arr, s, e) {
  let pivot = arr[e];
  let i = 0;
  let j = 0;
  //go from i = 0 to i = e and each time you enconter a ele that is smaller than pivot put it into the beginning of the array.
  while (i <= e) {
    if (arr[i] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++, j++;
    }
    else { i++ }
  }
  return j - 1;
}


function quickSort(arr, s, e) {
  // Base Case
  if (s > e) {
    return;
  }
  let pivot_idx = partition(arr, s, e);
  quickSort(arr, s, pivot_idx - 1);
  quickSort(arr, pivot_idx + 1, e);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0]
  let arr = input[1].split(" ").map(Number);

  let ans = quickSort(arr, 0, n - 1);
  console.log(arr.join(" "));
}