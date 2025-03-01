/*
Substrings with K distinct letters

Description  
Given string str of lowercase alphabets of length n and an integer K, the task is to count all substrings of length K 
which have exactly K distinct characters.


Sample Input 1  
4 2  
abcc  

Sample Output 1  
2  

Hint  
Sample 1 Explanation  
Possible substrings of length K = 2 are  
ab : 2 distinct characters  
bc : 2 distinct characters  
cc : 1 distinct character  
Only two valid substrings exist {"ab", "bc"}.


*/


// Helper function to check if all characters in the map have a count of 1 (i.e., they are distinct)
const check = (map) => {
    // Iterate through the map to check if any character appears more than once
    for (let i in map) {
        if (map[i] > 1) {
            return false;
        }
    }

    // If All characters are distinct, return true
    return true;
}

// Main function to find substrings with exactly 'k' distinct letters
function KdinstinctLettrs(N, k, str) {

    let map = {};
    let cnt = 0;   // Initialize a counter to keep track of substrings with exactly 'k' distinct characters


    // Step 1: Process the first 'k' characters of the string
    for (let i = 0; i < k; i++) {
        map[str[i]] = (map[str[i]] || 0) + 1;
    }

    // Step 2: Check if the first window forms a valid substring with distinct characters
    if (check(map)) {
        cnt++;
    }

    // Step 3: Slide the window over the string and check subsequent substrings
    for (let i = k; i < N; i++) {
        let s = i - k;  // Starting index of the previous substring
        let e = i;      // Ending index of the current substring

        // Remove the first element of the window.
        map[str[s]] -= 1;

        // add next element to the window to slide.
        map[str[e]] = (map[str[e]] || 0) + 1;

        // Step 4: Check if the current substring has exactly 'k' distinct characters
        if (check(map)) {
            cnt++;
        }
    }
    console.log(cnt);
}
