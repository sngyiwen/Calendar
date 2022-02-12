//this function fills in all the table cells. It is called when the programme starts and when the month is changed.
function fillInCalender() {
  updateCalenderDates();

  var monthToFillIn = {};
  var previousMonthIndex = {};

  month_data.forEach(function (month, i) {
    if (
      month.year == data.calender.year &&
      month.month_index == data.calender.month
    ) {
      //monthToFillIn is current month
      monthToFillIn = month;
      previousMonthIndex = i - 1;
      // console.log("Found it");
      return;
    }
  });
  let days = document.getElementsByTagName("td");
  let currentMonthCount = 1;
  let previousMonthCount =
    month_data[previousMonthIndex].amount_of_days -
    monthToFillIn.starting_day +
    1;
  let nextMonthCount = 1;
  let uid;
  // removeCurrentDayId();
  cleanCells(days);

  for (let i = 0; i < days.length; i++) {
    //Filling current month
    if (
      monthToFillIn.starting_day <= i &&
      currentMonthCount <= monthToFillIn.amount_of_days
    ) {
      // days[i].innerHTML = currentMonthCount;
      fillPartialMonthData(
        days[i],
        currentMonthCount,
        monthToFillIn,
        "current"
      );
      uid = getUID(
        monthToFillIn.month_index,
        monthToFillIn.year,
        currentMonthCount
      );
      days[i].setAttribute("data-uid", uid);
      if (
        currentMonthCount == data.current_date.date &&
        calenderMonthIsCurrentMonth()
      ) {
        days[i].setAttribute("id", "current-day");
      }
      appendSpriteToCellToolTip(uid, days[i]);
      currentMonthCount++;
      // filling previous month
    } else if (currentMonthCount <= monthToFillIn.amount_of_days) {
      // days[i].innerHTML = previousMonthCount;
      fillPartialMonthData(
        days[i],
        previousMonthCount,
        month_data[previousMonthIndex],
        "previous"
      );
      days[i].classList.add("color");
      uid = getUID(
        month_data[previousMonthIndex].month_index,
        month_data[previousMonthIndex].year,
        previousMonthCount
      );
      days[i].setAttribute("data-uid", uid);
      if (previousMonthCount == month_data[previousMonthIndex].amount_of_days) {
        days[i].classList.add("prev-month-last-day");
      }
      appendSpriteToCellToolTip(uid, days[i]);
      previousMonthCount++;
      //  filling next month
    } else {
      // days[i].innerHTML = nextMonthCount;

      fillPartialMonthData(days[i], nextMonthCount),
        month_data[(monthToFillIn.month_index + 1, "next")];
      uid = getUID(
        monthToFillIn.month_index + 1,
        monthToFillIn.year,
        nextMonthCount
      );
      days[i].setAttribute("data-uid", uid);
      days[i].classList.add("color");
      appendSpriteToCellToolTip(uid, days[i]);
      nextMonthCount++;
    }
  }
  changeColor();
}

function fillPartialMonthData(day, count, monthObject, month) {
  day.innerHTML = count;
  if (month == "current") {
    if (count == data.current_date.date && calenderMonthIsCurrentMonth()) {
      day.setAttribute("id", "current-day");
    }
  } else {
    day.classList.add("color");
    if (month == "previous" && count == monthObject.amount_of_days) {
      day.classList.add("prev-month-last-day");
    }
  }

}

function getUID(month, year, day) {
  if (month == 12) {
    month = 0;
    year++;
  }
  return month.toString() + year.toString() + day.toString();
}

function appendSpriteToCellToolTip(uid, elem) {
  for (let i = 0; i < post_its.length; i++) {
    if (uid == post_its[i].id) {
      elem.innerHTML += `<img src='images/note${post_its[i].note_num}.png' alt='A post-it note'>`;
      elem.classList.add("tooltip");
      elem.innerHTML += `<span>${post_its[i].note}</span>`;
    }
  }
}
//this function is used to remove all unecessary cell attributes. IE: color, pre-month-last-day
// function cleanCells() {
//   removeCurrentDayId();
//   var tableCells = document.getElementsByTagName("td");
//   for (let i = 0; i < tablecCells.length; i++) {
//     removeClass(tableCells[i], "color");
//     removeClass(tableCells[i], "prev-month-last-day");
//     removeClass(tableCells[i], "tooltip");
//     removeAttribute(tableCells[i], "style");
//   }
// }

function cleanCells(cells) {
  removeCurrentDayId();
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains("color"));
    {
      cells[i].classList.remove("color");
    }
    if (cells[i].classList.contains("prev-month-last-day")) {
      cells[i].classList.remove("prev-month-last-day");
    }
    if (cells[i].classList.contains("tooltip")) {
      cells[i].classList.remove("tooltip");
    }
    if (cells[i].hasAttribute("style")) {
      cells[i].removeAttribute("style");
    }
  }
}

// When the calender is updated the current-day id will persist. This code removes it.  Is called in cleanCell()
function removeCurrentDayId() {
  if (document.getElementById("current-day")) {
    document.getElementById("current-day").removeAttribute("id");
  }
}

// This function is used to determine whether the calender month is also the current month.
// It's needed to know if the program should set a #current-day when running fillInCalender()
function calenderMonthIsCurrentMonth() {
  if (
    data.current_date.year == data.calender.year &&
    data.current_date.month == data.calender.month
  ) {
    return true;
  } else {
    return false;
  }
}

function nextMonth() {
  console.log("next month");
  if (
    data.calender.month != 11 ||
    data.calender.year != month_data[month_data.length - 1].year
  ) {
    data.calender.month++;
  }
  if (data.calender.month >= 12) {
    data.calender.month = 0;
    data.calender.year++;
  }
  fillInCalender();
}
function previousMonth() {
  console.log("previous month");
  if (data.calender.month != 11 || data.calender.year != month_data[0].year) {
    data.calender.month--;
  }
  if (data.calender.month <= -1) {
    data.calender.month = 11;
    data.calender.year--;
  }
  fillInCalender();
}
document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      previousMonth();
      break;
    case 39:
      nextMonth();
      break;
  }
};
