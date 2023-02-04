const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
  for (let i = 0; i < PLDay + 1; i++) {
    prevDates.unshift(PLDate - i);
  }
}

for (let i = 1; i < 7 - TLDay; i++) {
  nextDates.push(i);
}

const dates = prevDates.concat(thisDates, nextDates);

dates.forEach((date, i) => {
  dates[i] = `<div class=date classList="today">${date}</div>`;
  console.log(date);
});

document.querySelector(".dates").innerHTML = dates.join("");

const today = new Date();

// if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
//   for (let date of document.querySelectorAll(".this")) {
//     if (+date.innerText === today.getDate()) {
//       date.classList.add("today");
//       brerak;
//     }
//   }
// }
