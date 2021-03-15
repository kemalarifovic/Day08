// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
randomRangeNumber(5, 10);
console.log(randomRangeNumber(15, 20));
// Only change code above this line
module.exports = randomRangeNumber;
