import fonts from '../styles/font.module.scss';

export const fmt = (n) => n.toLocaleString('en', {
  maximumFractionDigits: 2
});

export const fmtPrice = (price) => (
  (!price && '—') ||
    price < 0 ? '-$' + fmt(Math.abs(price)) : '$' + fmt(price)
);

export const fmtPercent = price => (
  price ? fmt(100 * price) + '%' : '—'
);

export const fmtClass = (price) => price && price > 0 ? fonts.positive : fonts.negative;

export const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

// const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
