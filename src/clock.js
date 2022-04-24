const clock = document.querySelector("h2#clock");

function getClock() {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const ndate = date.getDate();
  const day = week[date.getDay()];
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${year}년 ${month}월 ${ndate}일 ${day}요일 ${hour}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
