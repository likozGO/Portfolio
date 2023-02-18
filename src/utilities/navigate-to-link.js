function navigateToLink(location = '') {
  if (!location) throw new Error('Location link is empty');

  window.open(location, '_blank');
}

export default navigateToLink;
