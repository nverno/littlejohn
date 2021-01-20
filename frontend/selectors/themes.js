export const setOverlay = (theme) => (
  theme === 'dark' ? 'overlay-dark overlay' : 'overlay'
);

export const setupModal = (theme) => {
  if (theme === 'dark') {
    document.body.classList.add('overlay-dark');
  } 
  document.body.classList.add('overlay');
};

export const cleanupModal = () => {
  document.body.classList.remove('overlay-dark');
  document.body.classList.remove('overlay');
};
