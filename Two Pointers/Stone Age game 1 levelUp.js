/*

Stone age game I - LevelUp

Description  
2 players ram and shyam are playing a game where in they both stand opposite each other and and there are n boxes between them.  
Each box contains some number of stones in it. They can move in these boxes only in one direction, i.e. ram can move only towards shyam and shyam only towards ram, also they cannot cross each other.  
As and when they step foot in a box they collect all the stones in their bag and then they can decide whether to move forward or not.  
The task is that at the end of the game the total number of stones in both the bags should be same. They cannot cross each other and cannot stand in the same box as well.  
Find the maximum no of stones each can collect so that they both have same number of stones after covering x1 and x2 boxes respectively (x1+x2=n).  
If they cannot have equal number of stones then output 0. If there exists some number of stones they can collect so that they have equal stone then they are said to win the game.


Input :+
2
5
100 8 97 2 1
5
100 9 96 2 1

Output : 
100
0

2
5
100 8 97 2 1
5
100 9 96 2 1


Hint :
First testcase  
In the first testcase the only possible solution is that ram jump one box from left and shyam jump three boxes from the right so now each of them have 100 stones in their bag.  
Hence they win the game and output is 100.  

Second testcase  
In the second testcase there exits no solution, they lose the game hence output is 0.

*/

function numberOfStone(n, box) {


  // Two Pointer Approach
  // Step-1 : Use Two pointers to traverse the box array 
  // Step-2 : use ram and shyam 2 variables to sum the stones counts for each , initialize these 2 as 0.
  // Step-3 : If ram total is smaller or equal to shayam total then sum the current element into the ram total
  // Step-4 : If shyam total is smaller then ram , add into the shyam total. 
  // Step-5 : If both are equals record it into the ans.
  let s = 0;
  let e = n - 1;

  let ram = 0;
  let shyam = 0;  
  let ans = 0;

  while (s <= e) {
    
    if (ram <= shyam) {
      ram += box[s++];
    }
    else if (ram > shyam) {
      shyam += box[e--];
    }
    
    if (ram == shyam) {
      ans = ram;
    }

  }
  console.log(ans);
}


numberOfStone2(8, [5, 2, 5, 2, 1, 4, 6, 6])
numberOfStone(8, [5, 2, 5, 2, 1, 4, 6, 6])


function numberOfStone2(n, box) {


  let s = 0;
  let e = n - 1;

  let ram = 0;
  let Rcnt = 0;
  let shyam = 0;
  let Scnt = 0;
  let ans = 0;


  while (s <= e) {

    if (ram <= shyam) {
      ram += box[s];
      Rcnt++;
      s++;
    }
    else if (ram > shyam) {
      shyam += box[e];
      Scnt++;
      e--;
    }

    if (ram == shyam) {
      ans = Math.max(ans, Math.abs(Rcnt - Scnt + 1));
    }
  }
  console.log(ans);
}