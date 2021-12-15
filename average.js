function average(numbers) {
  const n = numbers.filter(function (value) {
    return !Number.isNaN(value);
});
  return n.reduce((p, c)=> p + c, 0) / n.length;
}
module.exports = {average};
