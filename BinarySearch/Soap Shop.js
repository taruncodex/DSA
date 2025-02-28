function search(soaps, n, key) {
  let l = 0;
  let h = n - 1;

  while (l <= h) {
    let mid = Math.floor((l + h) / 2);

    if (soaps[mid] < key) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }

  return l;
}

function solve(soaps, n, prices, m) {
  soaps.sort((a, b) => a - b);

  for (let i = 0; i < m; i++) {
    let ans = search(soaps, n, prices[i]);
    console.log(ans);
  }
}
