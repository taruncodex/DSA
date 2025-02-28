function performMerging(n, arr1, arr2) {
  //write code here
  let s = 0;
  let e = 0;
  let ans = [];

  while (s < n && e < n) {
    if (arr1[s] <= arr2[e]) {
      ans.push(arr1[s]);
      s++;
    } else {
      ans.push(arr2[e]);
      e++;
    }
  }

  while (s < n) {
    ans.push(arr1[s]);
    s++;
  }
  while (e < n) {
    ans.push(arr2[e]);
    e++;
  }
  console.log(ans.join(" "));
}

// long code

function performMerging(n, arr1, arr2) {
  //write code here

  let s = 0;
  let e = 0;
  let ans = [];

  while (s < n && e < n) {
    if (arr1[s] < arr2[e]) {
      ans.push(arr1[s]);
      s++;
    } else if (arr1[s] > arr2[e]) {
      ans.push(arr2[e]);
      e++;
    } else if (arr1[s] == arr2[e]) {
      ans.push(arr1[s]);
      s++;
    }
  }

  while (s < n) {
    ans.push(arr1[s]);
    s++;
  }
  while (e < n) {
    ans.push(arr2[e]);
    e++;
  }

  console.log(ans.join(" "));
}
