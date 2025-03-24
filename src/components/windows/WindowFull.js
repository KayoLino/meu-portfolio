import { useState } from 'react';
import './windowFull.css';

import close from '../../assets/icons/close.png';
import { closeWindow } from '../../hooks/useOpenWindow';

export default function WindowFull({ children, setState, setName, setIcon, setShowTaskBar }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setShowTaskBar(false);
    setTimeout(() => closeWindow(setState, setName, setIcon), 300);
  };

  return (
    <div className={`windowFull-container ${closing ? 'windowClosing' : 'windowOpen'}`}>
      <div className="windowFull-close">
        <img src={close} alt="Fechar" onClick={handleClose} />
      </div>
      <div>{children}</div>
    </div>
  );
}
