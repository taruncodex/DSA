function maxPairLessThanK(arr, k) {
    //write code here

    // Step-1 : Sort the array. 
    // Step-2 : if sum < k then record the maximum sum & s++ ;
    // Step-3 : if sum >= k then e-- ;
    
    arr.sort((a, b) => a - b);
    let ans = -1;
    let s = 0;
    let e = arr.length - 1;

    while (s < e) {
        let sum = arr[s] + arr[e];
        if (sum < k) {
            ans = Math.max(ans, sum);
            s++;
        }
        else {
            e--;
        }
    }
    console.log(ans)
}