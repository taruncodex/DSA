// Implementation - 1 :
function mergeSort(arr, s, e) {
  // Step-1 : set the base case.
  // Step-2 : Divide the arr in to half halves by function calls
  // Step-3 : call the merge sort ;

  if (s >= e) {
    return;
  }

  let mid = s + Math.floor((e - s) / 2);
  mergeSort(arr, s, mid); // Include mid also
  mergeSort(arr, mid + 1, e);
  merge(arr, s, mid, e); // No return needed.
}

function merge(arr, s, mid, e) {
  // create two arrays
  let len1 = mid - s + 1;
  let len2 = e - mid;

  // Create temporary arrays :
  let left = new Array(len1);
  let right = new Array(len2);

  // Now assigning the value of the main array to these arrays ;
  let k = s; // For main array

  for (let i = 0; i < len1; i++) {
    left[i] = arr[k++];
  }

  k = mid + 1;

  for (let i = 0; i < len2; i++) {
    right[i] = arr[k++];
  }

  // Merge 2 sorted array algorithm
  let i = 0; // for left array
  let j = 0; // for right array
  k = s; // for main array

  while (i < len1 && j < len2) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }
  }

  while (i < len1) {
    arr[k++] = left[i++];
  }

  while (j < len2) {
    arr[k++] = right[j++];
  }

  //
}



function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0]
  let arr = input[1].split(" ").map(Number);

  let ans = mergeSort(arr, 0, n - 1);
  console.log(ans.join(" "))
}



// Implementation-2
function merge_2_Sorted_Array(arr1, arr2) {
  //write code here
  let s = 0;
  let e = 0;
  let ans = [];

  while (s < arr1.length && e < arr2.length) {

    if (arr1[s] <= arr2[e]) {
      ans.push(arr1[s++])
    }
    else {
      ans.push(arr2[e++]);
    }
  }

  while (s < arr1.length) {
    ans.push(arr1[s++]);
  }

  while (e < arr2.length) {
    ans.push(arr2[e++]);
  }
  return ans;
}


function mergeSort(arr, s, e) {

  if (s == e) {
    return [arr[s]];
  }

  let mid = Math.floor(s + (e - s) / 2);

  let left_sort = mergeSort(arr, s, mid);
  let right_sort = mergeSort(arr, mid + 1, e);

  return merge_2_Sorted_Array(left_sort, right_sort);

}

