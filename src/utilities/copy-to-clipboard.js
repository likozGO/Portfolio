function copyToClipboard(text = '') {
  if (!text) throw new Error('Text string is empty');

  navigator.clipboard.writeText(text);
}

export default copyToClipboard;
