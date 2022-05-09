// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  let string = '';
  for (i = 0; i < n; i++) {
    string = string + s;
  }
  return string;
  }

console.log(repeatStr(7,"hi"))