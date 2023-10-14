/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const workDay: {[key: string]: Week} = {};

for (const day in Week) {
  if (isNaN(Number(day))) {
      if(day !== 'SATURDAY' && day !== 'SUNDAY') {
        workDay[day] = Week[day as keyof typeof Week];
  }
}}

function isWeekend(day: string): boolean {
  return workDay[day] === undefined;
}

console.log(isWeekend('MONDAY'))
console.log(isWeekend('SUNDAY'))