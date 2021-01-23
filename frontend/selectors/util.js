import fonts from '../styles/font.module.scss';

export const fmt = (n) => n.toFixed(2).toLocaleString('en');

export const fmtPrice = (price) => (
  (!price && '—') ||
    price < 0 ? '-$' + fmt(Math.abs(price)) : '$' + fmt(price)
);

export const fmtPercent = price => (
  price ? fmt(100 * price) + '%' : '—'
);

export const fmtClass = (price) => price && price > 0 ? fonts.posititve: fonts.negative;
