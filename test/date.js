/**
 * month 从0开始计数 0~11 
 * 
 */

// console.log(new Date(2023,6,30).toLocaleString()); // 2023/7/30 00:00:00
// console.log(new Date(2024,10, 0).toLocaleDateString()); // date传 0, 取到的是上个月的最后一天 -1 就是上个月的倒数第二天，-2 就是倒数第三天这样。






// 这个小技巧有很大的用处，可以用这个来拿到每个月有多少天：



// function getDays(year, month) {
//   return new Date(year, month + 1, 0).getDate();
// }

// console.log(getDays(2024, 0));
// console.log(getDays(2024, 1));
// console.log(getDays(2024, 2));
// console.log(getDays(2024, 3));
// console.log(getDays(2024, 4));
// console.log(getDays(2024, 5));
// console.log(getDays(2024, 6));
// console.log(getDays(2024, 7));
// console.log(getDays(2024, 8));
// console.log(getDays(2024, 9));
// console.log(getDays(2024, 10));
// console.log(getDays(2024, 11));

// 除了日期外，也能通过 getFullYear、getMonth 拿到年份和月份：

// 还可以通过 getDay 拿到星期几。





