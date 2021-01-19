import * as SettingsAPI from '../util/settings_api_util';

export const RECEIVE_THEME = 'RECEIVE_THEME';
export const RESET_THEME = 'RESET_THEME';

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
