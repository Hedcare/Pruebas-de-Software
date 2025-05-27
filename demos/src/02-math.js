function sum(a, b) {
  return a + b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b) {
  return a/b;
}

const average = (values) => {
  const valuesLength = values.length
  if(valuesLength === 0) return null

  const totalValues = values.reduce((a,b) => a+b, 0)
  return totalValues/ valuesLength
}
module.exports = {sum, multiply, divide, average};
