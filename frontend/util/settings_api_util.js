export const postTheme = (theme) => (
  $.ajax({
    method: 'POST',
    url: '/api/settings',
    data: { user: { theme } }
  })
);
