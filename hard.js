let week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = 0; i < week.length; i++) {
  if (week[i] !== "Saturday" || week[i] == "Sunday") {
    console.log(week[i].italics());
  }
  if (week[i] == "Saturday" || week[i] == "Sunday") {
    console.log(week[i].bold());
  }
}

let day = new Date();
console.log("Today is " + week[day.getDay()]);
