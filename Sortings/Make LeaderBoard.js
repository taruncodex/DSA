

function makeLeadeboard(n, name, marks) {
  
  // sort the names to get alphavetical order of name
    
  for (let i = 0; i < n - 1; i++) {
      
    for (let j = 0; j < n - 1 - i; j++) {
        
      if (name[j] > name[j + 1]) {
        temp = name[j];
        name[j] = name[j + 1];
        name[j + 1] = temp;
          
        temp = marks[j];
        marks[j] = marks[j + 1];
        marks[j + 1] = temp;
      }
    }
  }
    
  // sort the marks array to get the ranking.

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        
      // we need biggest number at the first position so sort in desending order.
      if (marks[j] < marks[j + 1]) {
        temp = name[j];
        name[j] = name[j + 1];
        name[j + 1] = temp;
          
        temp = marks[j];
        marks[j] = marks[j + 1];
        marks[j + 1] = temp;
      }
    }
  }
    
  
  let cnt = 1;
  for (let i = 0; i < n; i++) {
    // cnt remain constant until a smaller value not occur 
    console.log(cnt, name[i])

    //once it occur then it's clear that it will be greater than the current i's value
    if (i < n && marks[i] > marks[i + 1]) {
      cnt = i + 2;  // i+2 is crucial
    }
  }
}