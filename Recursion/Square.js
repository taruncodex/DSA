function fun(num, pow){
  
    if(pow<1){
      return 1;
    }
    if(pow == 1){
      return num ;
    }
     return num*num*fun(num , pow-2) ;
  }
  
  function runProgram(input) {
    // Write code here
    
    input = input.trim().split(" ");
   let n = fun(+input[0], +input[1]);
    
    console.log(n);
    
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  