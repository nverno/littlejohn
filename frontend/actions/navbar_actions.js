export const NAVBAR_DROPDOWN_OPEN = 'NAVBAR_DROPDOWN_OPEN';
export const NAVBAR_DROPDOWN_CLOSE = 'NAVBAR_DROPDOWN_CLOSE';
export const NAVBAR_CLOSE_ALL = 'NAVBAR_CLOSE_ALL';

export const navbarCloseAll = () => ({
  type: NAVBAR_CLOSE_ALL,
});

export const navbarDropdownClose = () => ({
  type: NAVBAR_DROPDOWN_CLOSE,
});

export const navbarDropdownOpen = (itemId) => ({
  type: NAVBAR_DROPDOWN_OPEN,
  itemId
});
