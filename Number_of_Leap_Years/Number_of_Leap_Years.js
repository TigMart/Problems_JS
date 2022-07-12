const NumberOfLeapYears = (year) => {
  let years = year.split("-").map((el) => Number(el));
  let count = 0;
  for (let i = years[0]; i <= years[1]; ++i) {
    if (new Date(i, 1, 29).getMonth() === 1) {
      ++count;
    }
  }
  return count;
};
console.log(NumberOfLeapYears("1600-2000"));
