import * as StockAPI from '../util/stocks_api';

export const RECEIVE_COMPANY_INFO = 'RECEIVE_COMPANY_INFO';

export const receiveCompanyInfo = (symbol, values) => ({
  type: RECEIVE_COMPANY_INFO,
  symbol,
  values,
});

export const fetchCompanyInfo = (symbol) => (dispatch) => {
  return StockAPI.fetchCompanyInfo(symbol).then((results) =>
    dispatch(receiveCompanyInfo(symbol, results))
  );
};
