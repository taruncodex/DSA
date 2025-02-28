function func(arr, n, k) {
  // creatin a sumArr
  let sumArr = [];

  subSeq(0, arr, 0, n, sumArr);

  let flag = false;

  for (let i of sumArr) {
    if (i % k == 0) {
      flag = true;
      break;
    }
  }

  if (flag) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

function subSeq(ans, arr, low, high, sumArr) {
  if (ans != 0) {
    sumArr.push(ans);
  }

  for (let i = low; i < high; i++) {
    subSeq(ans + arr[i], arr, i + 1, high, sumArr);
  }
  return sumArr;
}
