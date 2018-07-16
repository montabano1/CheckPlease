const revealDropwdown = (event) => {
  event.stopPropagation();
  event.target.removeClass('hidden');
  event.target.removeEventListener('click', revealDropdown);
  event.target.addEventListener('click', hideDropdown);
}

const hideDropdown = () => {
  event.target.addClass('hidden');
  event.target.addEventListener('click', revealDropdown);
  event.target.removeEventListener('click', hideDropdown);
}
