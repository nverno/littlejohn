export const postTheme = (theme) => (
  $.ajax({
    method: 'POST',
    url: '/api/settings',
    data: { user: { theme } }
  })
);

export const saveSettings = (settings) => {
  for (const [key, val] of Object.entries(settings)) {
    localStorage.setItem(key, JSON.stringify(val));
  }
};
