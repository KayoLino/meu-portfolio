
export function openWindow(name, icon, setActiveWindow, setName, setIcon, setShowTaskBar) {
  setActiveWindow(name);
  setName(name);
  setIcon(icon);
  setShowTaskBar(true);
}

export function closeWindow(setActiveWindow, setName, setIcon) {
  setActiveWindow(null);
  setIcon(null);
  setName('');
}