//Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m. and dinner at 7:00 p.m. in the evening.

// timeToEat("2:00 p.m.") ➞ [5, 0]
// 5 hours until the next meal, dinner

// timeToEat("5:50 a.m.") ➞ [1, 10]
// 1 hour and 10 minutes until the next meal, breakfast

const minutesMidnight = function (timeStr) {
  let rg = /(\d{1,2})\:(\d{1,2})\s+([ap])\.?m/;
  let [, hour, minute, am] = rg.exec(timeStr);
  hour = Number(hour);
  if (am === "a" && hour === 12) hour -= 12;
  if (am === "p" && hour < 12) hour += 12;
  return hour * 60 + Number(minute);
};

const MinutesToHoursAndMinutes = function (totalMinutes) {
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;
  return [hours, minutes];
};

const timeToEat = function (timeStr) {
  let curentTime = minutesMidnight(timeStr);

  let mealTimes = ["7:00 a.m", "12:00 p.m", "7:00 p.m"].map(minutesMidnight);

  let nextMealTime = mealTimes.find((mealTime) => mealTime >= curentTime);

  if (nextMealTime === undefined) {
    return nextMealTime;
  }
  let timeToNextMEALMinutes = nextMealTime - curentTime;
  return MinutesToHoursAndMinutes(timeToNextMEALMinutes);
};

console.log(timeToEat("12:00 a.m"));




// function timeToEat(str) {
//   const BREAKFAST = 7 * 60;
//   const LUNCH = 12 * 60;
//   const DINNER = 19 * 60;

//   let time = str.split(" ");
//   let hours = +time[0].split(":")[0];
//   let minutes = +time[0].split(":")[1];

//   if (time[1] === "p.m." && hours < 12) {
//     hours += 12;
//   }
//   if (time[1] === "a.m." && hours === 12) {
//     hours -= 12;
//   }

//   let givenHour = hours * 60 + minutes;
//   let hoursLeft = [];

//   if (hours < BREAKFAST) {
//     hoursLeft[0] = Math.floor((BREAKFAST - givenHour) / 60);
//     hoursLeft[1] = (BREAKFAST - givenHour) % 60;
//   } else if (hours < LUNCH) {
//     hoursLeft[0] = Math.floor((LUNCH - givenHour) / 60);
//     hoursLeft[1] = (LUNCH - givenHour) % 60;
//   } else {
//     hoursLeft[0] = Math.floor((DINNER - givenHour) / 60);
//     hoursLeft[1] = (DINNER - givenHour) % 60;
//   }
//   return hoursLeft;
// }
// // console.log(timeToEat("5:50 a.m."));
// console.log(timeToEat("12:00 a.m."));
