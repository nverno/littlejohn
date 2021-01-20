import * as SettingsAPI from '../util/settings_api_util';
import { receiveOpenLists } from './list_actions';

export const RECEIVE_THEME = 'RECEIVE_THEME';
export const RESET_THEME = 'RESET_THEME';
export const RECEIVE_API_KEYS = 'RECEIVE_API_KEYS';
export const RECEIVE_API_KEY = 'RECEIVE_API_KEY';

export const receiveApiKey = (key, value) => ({
  type: RECEIVE_API_KEY,
  key, value
});

export const receiveApiKeys = (keys) => ({
  type: RECEIVE_API_KEYS,
  keys
});

export const resetTheme = () => ({
  type: RESET_THEME,
});

export const receiveTheme = (theme) => ({
  type: RECEIVE_THEME,
  theme
});

export const setTheme = (theme) => dispatch => {
  document.getElementsByTagName('body')[0].className = theme;
  SettingsAPI.postTheme(theme).then(
    _ => dispatch(receiveTheme(theme)));
};

export const resetSettings = () => dispatch => {
  document.getElementsByTagName('body')[0].className = '';
  dispatch(resetTheme());
};

export const loadSettings = (user) => dispatch => {
  dispatch(setTheme(user.theme));
};

export const loadUiSettings = (settings) => dispatch => {
  if (settings.lists)
    dispatch(receiveOpenLists(settings.lists));
};
