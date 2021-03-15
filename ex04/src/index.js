// Only change code below this line
function localScope() {
  var myVariable = "I am here!";
  console.log("inside localscope:", myVariable);
}
localScope();
// Only chagne code above this line

// myVariable is not defined outside of localscope
if (typeof myVariable != "undefined") {
  console.log("outside localScope", myVariable);
} else {
  console.log("outside localScope UNDEFINED!!!");
}

module.exports = localScope;
