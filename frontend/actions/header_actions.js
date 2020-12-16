export const HEADER_DROPDOWN_OPEN = 'HEADER_DROPDOWN_OPEN';
export const HEADER_DROPDOWN_CLOSE = 'HEADER_DROPDOWN_CLOSE';
export const HEADER_CLOSE_ALL = 'HEADER_CLOSE_ALL';

export const headerCloseAll = () => ({
  type: HEADER_CLOSE_ALL,
});
export const headerDropdownClose = () => ({
  type: HEADER_DROPDOWN_CLOSE,
});
export const headerDropdownOpen = (itemId) => ({
  type: HEADER_DROPDOWN_OPEN,
  itemId,
});
