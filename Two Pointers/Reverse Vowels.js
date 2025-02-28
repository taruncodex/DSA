function reverseVowels(str) {
    // Write code here
    // Step:1 split the string into array as string are immutable and can't be modified;
    // Step:2 use two pointers s and e to travers the array from start as well as end.
    // Step:3 while you do not encounter any vowel from start keep increment s and while 
    //        you do not encounter any vowel from the end keep  decrement e 
    // Step:4  swap when s and e both are pointing at the vowels .

    let v = "aeiou";
    let arr = str.split("");
    let s = 0;
    let e = arr.length - 1;
    while (s < e) {

        while (!v.includes(arr[s]) && s < e) {
            s++;
        }
        while (!v.includes(arr[e]) && s < e) {
            e--;
        }

        [arr[s++], arr[e--]] = [arr[e], arr[s]];
    }
    console.log(arr.join(""));
}