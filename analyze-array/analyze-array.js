function analyzeArray (array) {
  let min = array.reduce((smallest, current) => {
    if (current < smallest) return current;
    else return smallest;
  });
  let max = array.reduce((largest, current) => {
    if (current > largest) return current;
    else return largest;
  });
  let average = array.reduce((total, current) => total += current) / array.length;
  let length = array.length;

  return { min, max, average, length };
}

module.exports = analyzeArray;