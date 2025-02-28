function merge(arr, temp, s, mid, e) {

    let i = s;
    let j = mid;
    let k = s;
    let cnt = 0;

    while (i <= mid - 1 && j <= e) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        }
        else {
            temp[k++] = arr[j++];
            cnt += mid - i;
        }
    }

    while (i <= mid - 1) {
        temp[k++] = arr[i++];
    }
    while (j <= e) {
        temp[k++] = arr[j++];
    }

    for (let i = s; i <= e; i++) {
        arr[i] = temp[i];
    }

    return cnt;
}


function inversionCount(arr, temp, s, e) {

    let cntIn = 0

    if (s < e) {
        let mid = s + Math.floor((e - s) / 2);

        cntIn += inversionCount(arr, temp, s, mid);
        cntIn += inversionCount(arr, temp, mid + 1, e);

        cntIn += merge(arr, temp, s, mid + 1, e);
    }

    return cntIn;
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0]
    let arr = input[1].split(" ").map(Number);

    let ans = inversionCount(arr, [], 0, n - 1);
    console.log(ans)
}
