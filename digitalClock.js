const clockDiv = document.getElementById("clock");

function getTime() {
  let now = new Date();
  let hour = number(now.getHours()); //시 0-23시
  let minute = number(now.getMinutes()); //분 0-59분
  let second = number(now.getSeconds()); //초 0-59초
  let dayNumber = now.getDay(); //요일 0-6
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  let noon = "AM";
 let date1 = number(now.getDate()); 
let month = number(now.getMonth()); //월 1-12월
  let year = number(now.getFullYear()); //년
  if (hour > 11) {
    noon = "PM";
    if (hour > 12) {
      hour = hour - 12;
    }
  }

  if (now.getHours() == 0) {
    hour = 12;
  }

  clockDiv.textContent = noon + ":" + hour + ":" + minute + ":" + second + " " + year + "-" + month + "-" + date1 + " " + dayList[dayNumber];
}
getTime();
setInterval(getTime, 1000);

function number(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}
//<div id="today"></div>
//const todayDiv = document.getElementById("today");
//let dayNumber = now.getDay(); //요일 0-6
//const dayList = ["일", "월", "화", "수", "목", "금", "토"];