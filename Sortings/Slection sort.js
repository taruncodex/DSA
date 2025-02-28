// Selection Sort

function solve(N, arr) {
  //write code here
  let ans = "";

  for (let i = 0; i < N; i++) {
    let min_index = i;

    for (let j = i; j < N; j++) {
      //Update the min_index
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    ///swap min_index with ith element
    if (i != min_index) {
      arr[i] = arr[i] + arr[min_index];
      arr[min_index] = arr[i] - arr[min_index];
      arr[i] = arr[i] - arr[min_index];
    }
    ans += arr[i] + " ";
  }

  console.log(ans)
}


function soting(arr, n) {

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[min] > arr[j]) {
        // We don't need to swap everytime , we just need to update the min_index value
        // swap will happened once j complete the loop.
        min = j;
      }
    }

    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }

  }

  console.log("\n")
}

soting([4, 5, 3, 2, 1], 5);
