// Components
import {
  Background,
  Footer,
  WindowFull,
  MyProjects,
  Experience,
  Education,
  Skills,
  Resume,
  Email,
  InitialPage,
  LoadingPage
} from '../components';

// Css
import './desktop.css';

// icons
import myProjects from '../assets/icons/myProjects.png';
import experience from '../assets/icons/experience.png';
import education from '../assets/icons/education.png';
import skills from '../assets/icons/skills.png';
import github from '../assets/icons/github.png';
import resume from '../assets/icons/resume.png';
import email from '../assets/icons/email.png';

// Hooks
import { useState, useEffect } from 'react';
import { openWindow, closeAllWindows } from '../hooks/useOpenWindow';

export default function Desktop() {

  const [initialDesktop, setInitialDesktop] = useState(true);
  const [loading, setLoading] = useState(false);

  const [activeWindow, setActiveWindow] = useState(null);
  const [icon, setIcon] = useState(null);
  const [showTaskBar, setShowTaskBar] = useState(false);
  const [name, setName] = useState('');

  const handleClick = () => {
    setInitialDesktop(false);
    setLoading(true);
  };

  useEffect(() => {
    let timer;

    if (loading) {
      timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [loading]);

  if (initialDesktop) {
    return (
      <>
        <Background />
        <InitialPage handleClick={handleClick} />
      </>
    )
  }

  if (loading) {
    return (
      <>
        <Background />
        <LoadingPage />
      </>
    );
  }

  return (
    <>
      <Background />
      <div className="desktop-container">
        {activeWindow === 'Projetos' && (
          <WindowFull setState={() => setActiveWindow(null)} setName={setName} setIcon={setIcon} setShowTaskBar={setShowTaskBar}>
            <MyProjects />
          </WindowFull>
        )}

        {activeWindow === 'Experiência' && (
          <WindowFull setState={() => setActiveWindow(null)} setName={setName} setIcon={setIcon} setShowTaskBar={setShowTaskBar}>
            <Experience />
          </WindowFull>
        )}

        {activeWindow === 'Educação' && (
          <WindowFull setState={() => setActiveWindow(null)} setName={setName} setIcon={setIcon} setShowTaskBar={setShowTaskBar}>
            <Education />
          </WindowFull>
        )}

        {activeWindow === 'Habilidades' && (
          <WindowFull setState={() => setActiveWindow(null)} setName={setName} setIcon={setIcon} setShowTaskBar={setShowTaskBar}>
            <Skills />
          </WindowFull>
        )}

        {activeWindow === 'Resumo' && (
          <WindowFull setState={() => setActiveWindow(null)} setName={setName} setIcon={setIcon} setShowTaskBar={setShowTaskBar}>
            <Resume />
          </WindowFull>
        )}

        {activeWindow === 'Email' && (
          <WindowFull setState={() => setActiveWindow(null)} setName={setName} setIcon={setIcon} setShowTaskBar={setShowTaskBar}>
            <Email />
          </WindowFull>
        )}

        <div className="desktop-section">
          <div className="folders">
            <div className="folder" onClick={() => openWindow('Projetos', myProjects, setActiveWindow, setName, setIcon, setShowTaskBar)}>
              <img src={myProjects} alt="Meus Projetos" />
              <p>Projetos</p>
            </div>
            <div className="folder" onClick={() => openWindow('Experiência', experience, setActiveWindow, setName, setIcon, setShowTaskBar)}>
              <img src={experience} alt="Experiência" />
              <p>Experiência</p>
            </div>
            <div className="folder" onClick={() => openWindow('Educação', education, setActiveWindow, setName, setIcon, setShowTaskBar)}>
              <img src={education} alt="Educação" />
              <p>Educação</p>
            </div>
            <div className="folder" onClick={() => openWindow('Habilidades', skills, setActiveWindow, setName, setIcon, setShowTaskBar)}>
              <img src={skills} alt="Habilidades" />
              <p>Habilidades</p>
            </div>
          </div>
          <div className="files">
            <a className="file" href="https://github.com/KayoLino" target="_blank">
              <img src={github} alt="GitHub" />
              <p>GitHub</p>
            </a>
            <div className="file" onClick={() => openWindow('Resumo', resume, setActiveWindow, setName, setIcon, setShowTaskBar)}>
              <img src={resume} alt="Resumo" />
              <p>Resumo.pdf</p>
            </div>
            <div className="file" onClick={() => openWindow('Email', email, setActiveWindow, setName, setIcon, setShowTaskBar)}>
              <img src={email} alt="Email" />
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
      <Footer name={name} icon={icon} showTaskBar={showTaskBar} />
    </>
  );
}  