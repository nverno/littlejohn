import * as StocksAPI from '../util/stocks_api';
import { receiveApiErrors } from './stock_price_actions';
export const RECEIVE_BATCH_NEWS = 'RECEIVE_BATCH_NEWS';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';

export const receiveNews = (symbol, news) => ({
  type: RECEIVE_NEWS,
  symbol,
  news,
});

export const receiveBatchNews = (data) => ({
  type: RECEIVE_BATCH_NEWS,
  data
});

export const fetchNews = (symbol, n) => dispatch => {
  return StocksAPI.iexAPI.news(symbol, n).then(
    (news) => dispatch(receiveNews(symbol, news)),
    (errors) => dispatch(receiveApiErrors([errors.message])),
  );
};
