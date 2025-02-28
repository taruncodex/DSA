
function sort(arr, n) {

    if (n < 0) {
        return;
    }

    for (let j = 0; j < n; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }

    sort(arr, n - 1);

    return arr

}