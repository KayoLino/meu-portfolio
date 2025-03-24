
export function openWindow(setState, setName, string, setIcon, icon, setShowTaskBar) {
  setName(string);
  setIcon(icon);
  setShowTaskBar(true);
  setState(true);
}

export function closeWindow(setState, setName, setIcon) {
  setIcon(null);
  setName('');
  setState(false);
}