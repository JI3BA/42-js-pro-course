// :)
const smartSearch = (array, value) => array.includes(value);

const randomSearch = (value) => array[Math.floor(Math.random() * value)];

module.exports = {
  smartSearch,
  randomSearch,
}
