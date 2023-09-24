const reverse = (string) => {
  return string.split('').reverse().join('')
}

const average = (arr) => {
  const reducer = (acc, cur) => acc + cur
  return arr.reduce(reducer, 0) / arr.length
}

module.exports = { reverse, average }
