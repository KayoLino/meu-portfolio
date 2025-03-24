import './footer.css';

import windows from '../../assets/icons/windows.png';

export default function Footer({ name, icon, showTaskBar }) {
  return (
    <footer>
      <img src={windows} alt="Windows" />
      {name && (
        <div className={`taskbar ${showTaskBar ? 'grow' : 'growClose'}`}>
          <img src={icon} alt="Ícone" />
          <div>{name}</div>
        </div>
      )}
    </footer>
  );
}
