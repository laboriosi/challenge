export const sumAllItems = (array, key) => array.reduce((previousValue, currentValue) => previousValue + currentValue[key], 0);
