import './initialPage.css';

import profile from '../../assets/icons/windows.png'

function InitialPage({ handleClick }) {

  return (
    <div className="initialPage-container">
      <img src={profile} alt="Perfil" />
      <p>KOBA</p>
      <div>
        <input type="text" placeholder="Digite sua senha (opcional)" />
        <i class='bx bxs-right-arrow-circle' onClick={handleClick}></i>
      </div>
    </div>
  );
}

export default InitialPage;