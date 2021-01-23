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

// Global/Price themes
const globalThemes = ['dark'];
const priceThemes = ['theme-open-up', 'theme-open-down'];

const removeThemes = (themes) => {
  for (let theme of themes) {
    document.body.classList.remove(theme);
  }
};

export const setTheme = (theme) => dispatch => {
  removeThemes(globalThemes);
  if (theme.length) document.body.classList.add(theme);
  SettingsAPI.postTheme(theme).then(
    _ => dispatch(receiveTheme(theme)));
};

export const resetSettings = () => dispatch => {
  removeThemes(globalThemes);
  dispatch(resetTheme());
};

export const loadSettings = (user) => dispatch => {
  dispatch(setTheme(user.theme));
};

export const loadUiSettings = (settings) => dispatch => {
  if (settings.lists)
    dispatch(receiveOpenLists(settings.lists));
};

// Manage themes based on current price change
export const setPriceTheme = (theme) => {
  removeThemes(priceThemes);
  if (theme.length)
    document.body.classList.add(theme);
};
