/*

Weight lifting

Description  
Harry and John want to do a competition of weightlifting in which they can lift as many weights as they want. There are N weights numbered from 1 to N where ith weight has a value weight[i]. We have to find the total weight lifted by both of them separately after the competition ends.  
Competition ends when all the weights have been lifted by them. The rules of the game are as follows-  
Harry will lift the weight from left to right and John will lift the weight from right to left.  
Harry will start the game and in the first move he can only lift one weight i.e. weight[0].  
After the first move, the players will play alternatively i.e. after the first move the John will lift, then again Harry boy and so on.....  
The boy will lift the least possible weight just greater than the weight lifted by the other boy in the previous move i.e. if one
boy lifts weight equal to 8 in the previous turn, then the other boy has to lift a weight greater than 8 (using one or more weights).


Input :
2
1
1000
3
1 1 1


Output :
1000 0
1 2



Hint  
Explanation of Sample 1  
Move 1: Harry lifts one weight i.e. 3 and the sequence of remaining weights becomes [1, 4, 1, 5, 9, 2, 6, 5, 3, 5].  
Move 2: Harry lifted 3 on the previous move, which means John must lift 4 or more. John lifts one weight of size 5 and the sequence of remaining weights becomes [1, 4, 1, 5, 9, 2, 6, 3].  
Move 3: John lifted 5 on the previous move, which means Harry must lift 6 or more. Harry lifted three weights with a total weight of 1+4+1=6 and the sequence of remaining weights becomes [5, 9, 2, 6, 5, 3].  
Move 4: Harry lifted 6 on the previous move, which means John must lift 7 or more. John lifted two weights with the total weight of 3+5=8 and the sequence of remaining weights becomes [5, 9, 2, 6].  
Move 5: John lifted 8 on the previous move, which means Harry must lift 9 or more. Harry lifts two weights with the total weight of 5+9=14 and the sequence of remaining weights becomes [2, 6].
Move 6(at last): Harry lifted 14 on the previous move, which means John must lift 15 or more. As this is impossible to lift 15 or more, so John lifts the two remaining weights and the competition ends.  
Hence the total weight lifted by Harry is 23 and John is 21.


*/


function weightLiftingCompetition(N, arr) {
  //write code here

  let s = 0;
  let e = N - 1;
  let harry_total = 0;   // total weight harry will lift  
  let jonh_total = 0;   // total weight jonh will lift
  let last_weight = 0;   // To track the last weight ,

  let turn = 0;     // First turn is of harry

  while (s <= e) {
    let curr_weight = 0; // initially  curr_weight == jonh_weight

    // Harry Turn
    if (turn == 0) {

      // keep lift until curr lifted weight is smaller than equal to last lifted weight
      while (s <= e && curr_weight <= last_weight) {
        curr_weight += arr[s++];
      }

      // Update the harrytotal and last lifted weight.
      harry_total += curr_weight;
      last_weight = curr_weight;
      turn = 1;
    }


    // Jonh turn 
    else if (turn == 1) {

      // keep lift until curr lifted weight is smaller than equal to last lifted weight
      while (s <= e && curr_weight <= last_weight) {
        curr_weight += arr[e--];
      }

      // Update the harrytotal and last lifted weight.
      jonh_total += curr_weight;
      last_weight = curr_weight;
      turn = 0;
    }
  }

  console.log(harry_total + " " + jonh_total);
}
