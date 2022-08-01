export const changeDate = (date: string) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = Number(date.slice(-5, -3));
  const day = Number(date.slice(-2));
  return day + ' ' + months[month - 1];
};
