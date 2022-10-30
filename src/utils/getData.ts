export const getData = (date: Date) => {
  return String(date.toLocaleString('ru')).slice(0, 10);
};

export const getDataInDateFormat = (date: string) => {
  return date.split('.').reverse().join('-');
};
