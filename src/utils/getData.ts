export const getData = (date: Date) => {
  return String(date.toLocaleString('ru')).slice(0, 10);
};
