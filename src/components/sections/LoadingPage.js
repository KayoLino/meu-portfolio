import './loadingPage.css'

import bear from '../../assets/gifs/bear.gif';

function LoadingPage() {
  return (
    <div className="loadingPage-container">
      <img src={bear} alt="Urso carregando" />
      <p>Carregando...</p>
    </div>
  );
}

export default LoadingPage;