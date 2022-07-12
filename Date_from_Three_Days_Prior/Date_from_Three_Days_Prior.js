const DateFromThreeDaysPrior = function (date) {
  let currentTime = date.getTime();
  let oneDay = 1000 * 60 * 60 * 24;
  let threeday = 3 * oneDay;
  let result = currentTime - threeday;
  let a = new Date(result).toLocaleString();

  console.log(a);
};

let date = new Date(2015, 5, 17);
DateFromThreeDaysPrior(date);

function threeDaysAgo(date) {
  let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate() - 3;
  let newDate = new Date(year, month, day),
    newMonth = Number(newDate.getMonth()) + 1;
  if (newMonth < 10) newMonth = "0" + newMonth;
  return newDate.getFullYear() + "-" + newMonth + "-" + newDate.getDate();
}
