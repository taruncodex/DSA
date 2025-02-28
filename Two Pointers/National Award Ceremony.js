/*
Smilar to Sort 0s,1s and 2s without any sorting Algorithm

Uses:- Dutch National Flag Algorithm

National Award Ceremony

Description

It's December time and it's the time to celebrate all the state winners of various sports and award them with their medals.
 The medal awarded are either Gold, Silver, or Bronze. We have an array A of n winners where winners are randomly lined up 
 starting from position 0 to position n-1. The gold players have their value assigned as 0, silver as 1, and bronze as 2. Here all same medals winners are identical. Since the medals will be distributed uniformly i.e., first all golds then silver, and then subsequently bronze winners, you need to come up with an algorithm to arrange them in the uniform order so that the ceremony can start quickly as you are the event manager. Since the government computers are not well equipped with the latest technologies, there are some space and time constraints under which you need to execute this task. (Also the sort function doesn't work since it takes O(nlogn)). The required time complexity is linear and the required space complexity is constant per testcase.





Input :
3
2 0 1
4
2 0 2 1

Output :
0 1 2
0 1 2 2




*/


function sortMedals(n, arr) {
  // write code here

  let s = 0;
  let e = n - 1;
  let mid = 0;
  while (mid <= e) {

    if (arr[mid] == 0) {     //Handling arr[mid] == 0
      let temp = arr[s];
      arr[s] = arr[mid];
      arr[mid] = temp;
      mid++;
      s++;
    }
    else if (arr[mid] === 2) {    //Handling arr[mid] == 2
      // console.log()
      let temp = arr[e];
      arr[e] = arr[mid];
      arr[mid] = temp;
      e--;
    }
    else if (arr[mid] === 1) {    // Handling arr[mid] == 1 is very curcial
      mid++;
    }

  }


  let ans = "";
  for (let s of arr) {
    ans += s + " ";
  }
  console.log(ans)

}


function sort(arr) {

  let s = 0;
  let e = arr.length - 1;
  let mid = 0;

  while (mid < e)
    if (arr[mid] == 0) {
      let temp = arr[mid];
      arr[mid] = arr[s];
      arr[s] = temp;
      s++;
      mid++;
    }

    else if (arr[mid] == 2) {
      let temp = arr[mid];
      arr[mid] = arr[e];
      arr[e] = temp;
      e--;
    }

    else if (arr[mid] == 1) {
      mid++;
    }

  console.log(arr);

}

sort([2, 0, 2, 1, 1, 0])