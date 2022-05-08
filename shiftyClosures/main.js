// Functional closures can get overly attached. Set them straight!
// Why doesn't greet_abe() actually greet Abe?

// var name = 'Abe';
// var greet_abe = function() {
//   return "Hello, " + name + '!';
// };
// name = 'Ben';
// var greet_ben = function() {
//   return "Hello, " + name + '!';
// };

// Because the variable name is declared in the global namescape and reassigned, affecting the greet_abe function

var greet_abe = function() {
  var name = 'Abe';
  return "Hello, " + name + '!';
};

var greet_ben = function() {
  var name = 'Ben';
  return "Hello, " + name + '!';
};