let str = "a+b-c+d*(e-f)/g+(h*(i/j))";
let n = str.length;

function precedence(exp) {
    if (exp === "^")
        return 3;
    else if (exp == "/" || exp == "*")
        return 2;
    else if (exp == "+" || exp == "-")
        return 1;
    else
        return -1;
}

let post = "";
let s = [];

for (let i = 0; i < n; i++) {
    let exp = str[i];
    // if exp is a operand add in to post
    if ((exp >= "a" && exp <= "z") || (exp >= "A" && exp <= "Z") || (exp >= "0" && exp <= "9")) {
        post += exp;
    }
    // if exp == '(' push it into the stack.
    else if (exp === "(") {
        s.push(exp);
    }
    // if exp == ")" pop elements and add them into post until '(' is encountered.
    else if (exp == ")") {
        while (s.length > 0 && s[s.length - 1] != "(") {
            post += s.pop();
        }
        if (s.length > 0) {
            s.pop();
        }
    }
    // if exp == operator then add characters into the post until a higher precedence exp not encountered on the stack's top. Then push the expression.
    else {
        while (s.length > 0 && precedence(s[s.length - 1]) >= precedence(exp)) {
            post += s.pop();
        }
        s.push(exp);
    }
}

while (s.length) {
    post += s.pop();
}

console.log(post);

