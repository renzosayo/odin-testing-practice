function capitalize (string) {
  let [toCap, ...rest] = string;
  return toCap[0].toUpperCase() + [ ...rest].join('');
}

console.log(capitalize('a'));

module.exports = capitalize;