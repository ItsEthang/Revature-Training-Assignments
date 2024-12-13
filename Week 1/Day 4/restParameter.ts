const getTotal = (...numbers: number[]): number => {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
};

console.log(getTotal(10, 20));
