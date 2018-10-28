export function defineCurrencySign(currency) {
  switch(currency) {
    case 'EUR':
      return '€';
    default:
      return '$'
  }
}

export function sumArray(array) {
  return array.reduce((aggr, item) => aggr + item, 0);
}