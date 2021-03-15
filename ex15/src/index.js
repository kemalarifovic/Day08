const convertStrToInt = require("../../ex14/src");

// Only change code below this line
function converToInt(str) {
  return parseInt(str, 16);
}
converToInt("BA");
converToInt("F1");
converToInt("JeffBezos");
console.log(converToInt("BA"));
console.log(converToInt("F1"));
console.log(converToInt("JeffBezos"));
// Only change code above this line
module.exports = converToInt;
