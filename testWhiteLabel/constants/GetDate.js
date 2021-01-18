import moment from 'moment';

export default function GetDate() {
  // var currDate = '';
  // var date = new Date();
  // var month = '';
  // if (date.getMonth() === 0) {
  //   month = 'Jan';
  // } else if (date.getMonth() === 1) {
  //   month = 'Feb';
  // } else if (date.getMonth() === 2) {
  //   month = 'March';
  // } else if (date.getMonth() === 3) {
  //   month = 'April';
  // } else if (date.getMonth() === 4) {
  //   month = 'May';
  // } else if (date.getMonth() === 5) {
  //   month = 'June';
  // } else if (date.getMonth() === 6) {
  //   month = 'July';
  // } else if (date.getMonth() === 7) {
  //   month = 'Aug';
  // } else if (date.getMonth() === 8) {
  //   month = 'Sep';
  // } else if (date.getMonth() === 9) {
  //   month = 'Oct';
  // } else if (date.getMonth() === 10) {
  //   month = 'Nov';
  // } else if (date.getMonth() === 11) {
  //   month = 'Dec';
  // }
  // if (date.getHours() > 12) {
  //   var hours = date.getHours() % 12;
  //   if (date.getMinutes() <= 9) {
  //     currDate =
  //       month +
  //       ' ' +
  //       date.getDate() +
  //       ',' +
  //       date.getFullYear() +
  //       ' at ' +
  //       hours +
  //       ':0' +
  //       date.getMinutes() +
  //       ' pm';
  //   } else {
  //     currDate =
  //       month +
  //       ' ' +
  //       date.getDate() +
  //       ',' +
  //       date.getFullYear() +
  //       ' at ' +
  //       hours +
  //       ':' +
  //       date.getMinutes() +
  //       ' pm';
  //   }
  // } else {
  //   if (date.getMinutes() <= 9) {
  //     currDate =
  //       month +
  //       ' ' +
  //       date.getDate() +
  //       ',' +
  //       date.getFullYear() +
  //       ' at ' +
  //       date.getHours() +
  //       ':0' +
  //       date.getMinutes() +
  //       ' am';
  //   } else {
  //     currDate =
  //       month +
  //       ' ' +
  //       date.getDate() +
  //       ',' +
  //       date.getFullYear() +
  //       ' at ' +
  //       date.getHours() +
  //       ':' +
  //       date.getMinutes() +
  //       ' am';
  //   }
  // }
  // console.log(moment().format());
  return moment().format();
}
