var data = {
  current_modal_popup: 0,
  current_color: {
    color_name: "blue",
    color: "#1B19CF",
    off_color: "#7C7EFB",
  },

  current_date: {
    day: "",
    date: "",
    month: "",
    year: "",
  },
  calender: {
    month: "",
    year: "",
  },
  post_its: {
    current_post_it_id: 0,
    current_post_it_index: 0,
    current_post_it_new: true,
  } 
};

// var month_data = [
//   {
//       month_index: 10,
//       amount_of_days: 30,
//       starting_day: 4,
//       year: 2018
//   }, {
//       month_index: 11,
//       amount_of_days: 31,
//       starting_day: 6,
//       year: 2018
//   }, {
//       month_index: 0,
//       amount_of_days: 31,
//       starting_day: 2,
//       year: 2019
//   }, {
//       month_index: 1,
//       amount_of_days: 28,
//       starting_day: 5,
//       year: 2019
//   }, {
//       month_index: 2,
//       amount_of_days: 31,
//       starting_day: 5,
//       year: 2019
//   }, {
//       month_index: 3,
//       amount_of_days: 30,
//       starting_day: 1,
//       year: 2019
//   }, {
//       month_index: 4,
//       amount_of_days: 31,
//       starting_day: 3,
//       year: 2019
//   }, {
//       month_index: 5,
//       amount_of_days: 30,
//       starting_day: 6,
//       year: 2019
//   }, {
//       month_index: 6,
//       amount_of_days: 31,
//       starting_day: 1,
//       year: 2019
//   }, {
//       month_index: 7,
//       amount_of_days: 31,
//       starting_day: 4,
//       year: 2019
//   }, {
//       month_index: 8,
//       amount_of_days: 30,
//       starting_day: 7,
//       year: 2019
//   }, {
//       month_index: 9,
//       amount_of_days: 31,
//       starting_day: 2,
//       year: 2019
//   }, {
//       month_index: 10,
//       amount_of_days: 30,
//       starting_day: 5,
//       year: 2019
//   }, {
//       month_index: 11,
//       amount_of_days: 31,
//       starting_day: 0,
//       year: 2019
//   }, {
//       month_index: 0,
//       amount_of_days: 31,
//       starting_day: 4,
//       year: 2020
//   }
// ];


// var month_data = [
//   {//NOV 2020
//     month_index: 10,
//     amount_of_days: 30,
//     starting_day: 0, //sunday
//     year: 2020,
//   }, {//Dec 2020
//     month_index: 11,
//     amount_of_days: 31,
//     starting_day: 2,//tuesday 
//     year: 2020,
//   }, {//Jan 2021
//     month_index: 0,
//     amount_of_days: 31,
//     starting_day: 5,//friday
//     year: 2021,
//   }, {//Feb 2021
//     month_index: 1,
//     amount_of_days: 28,
//     starting_day: 1, //monday
//     year: 2021,
//   }, {//Mar 2021
//     month_index: 2,
//     amount_of_days: 31,
//     starting_day: 1, //monday
//     year: 2021,
//   }, {//Apr 2021
//     month_index: 3,
//     amount_of_days: 30,
//     starting_day: 4,//thursday
//     year: 2021,
//   },
//   {//May 2021
//     month_index: 4,
//     amount_of_days: 31,
//     starting_day: 6, //saturday
//     year: 2021,
//   },
//   {//Jun 2021
//     month_index: 5,
//     amount_of_days: 30,
//     starting_day: 2,//tuesday
//     year: 2021,
//   }, {//Jul 2021
//     month_index: 6,
//     amount_of_days: 31,
//     starting_day: 4, //thursday
//     year: 2021,
//   }, {//Aug 2021
//     month_index: 7,
//     amount_of_days: 31,
//     starting_day: 1, //monday
//     year: 2021,
//   },
//   {//Sep 2021
//     month_index: 8,
//     amount_of_days: 30,
//     starting_day: 3, //wednesday
//     year: 2021,
//   }, {//Oct 2021
//     month_index: 9, // october
//     amount_of_days: 31,
//     starting_day: 5,//friday
//     year: 2021,
//   }, {//Nov 2021
//     month_index: 10,
//     amount_of_days: 30,
//     starting_day: 1, //monday
//     year: 2021,
//   }, {//Dec 2021
//     month_index: 11,
//     amount_of_days: 31,
//     starting_day: 3, //wednesday
//     year: 2021,
//   }, {//Jan 2022
//     month_index: 0,
//     amount_of_days: 31,
//     starting_day: 6, //saturday 
//     year: 2022,
//   }

// ];

var color_data = [
  {
      name: 'blue',
      color_code: '#1B19CD',
      off_color_code: '#7C7EFB'
  }, {
      name: 'red',
      color_code: '#D01212',
      off_color_code: '#EEA19B'
  }, {
      name: 'purple',
      color_code: '#721D89',
      off_color_code: '#EBADFB'
  }, {
      name: 'green',
      color_code: '#158348',
      off_color_code: '#57C664'
  }, {
      name: 'orange',
      color_code: '#EE742D',
      off_color_code: '#F7A77A'
  }, {
      name: 'deep-orange',
      color_code: '#F13C26',
      off_color_code: '#F77D59'
  }, {
      name: 'baby-blue',
      color_code: '#31B2FC',
      off_color_code: '#3D8DD9'
  }, {
      name: 'cerise',
      color_code: '#EA3D69',
      off_color_code: '#FCBECC'
  }, {
      name: 'lime',
      color_code: '#2ACC32',
      off_color_code: '#4FFA4F'
  }, {
      name: 'teal',
      color_code: '#2FCCB9',
      off_color_code: '#7FE7E3'
  }, {
      name: 'pink',
      color_code: '#F50D7A',
      off_color_code: '#FFB9EA'
  }, {
      name: 'black',
      color_code: '#212524',
      off_color_code: '#687E7B'
  }
];

function generateMonthData(maxYear) {

  let data = [{
    month_index: 10,
    amount_of_days: 30,
    starting_day: 4,
    year: 2018
  }, {
    month_index: 11,
    amount_of_days: 31,
    starting_day: 6,
    year: 2018
  },
  ];

  let prevMonth = data[data.length - 1];
  // console.log(data.length-1);
  // console.log(prevMonth);
  let nextStartingDay = (prevMonth.amount_of_days + prevMonth.starting_day) % 7;
  // console.log(nextStartingDay);

  for (let year = 2019; year <= maxYear; year++) {
    for (let month = 0; month <= 11; month++) {
      // console.log(year, month);
      let m = {
        month_index: month,
        amount_of_days: new Date(year, month + 1, 0).getDate(),
        starting_day: nextStartingDay,
        year: year
      }
      // console.log(m);
      nextStartingDay = (m.amount_of_days + m.starting_day) % 7;
      data.push(m);
    }
  }
  return data;
}
var month_data = generateMonthData(2030);

var post_its = [];