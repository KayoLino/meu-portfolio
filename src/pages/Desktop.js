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
import { openWindow } from '../hooks/useOpenWindow';

export default function Desktop() {

  const [initialDesktop, setInitialDesktop] = useState(true);
  const [loading, setLoading] = useState(false);

  const [icon, setIcon] = useState(null);
  const [showTaskBar, setShowTaskBar] = useState(false);
  const [name, setName] = useState('');
  const [windowProject, setWindowProject] = useState(false);
  const [windowExperience, setWindowExperience] = useState(false);
  const [windowEducation, setWindowEducation] = useState(false);
  const [windowSkills, setWindowSkills] = useState(false);
  const [windowGithub, setWindowGithub] = useState(false);
  const [windowResume, setWindowResume] = useState(false);
  const [windowEmail, setWindowEmail] = useState(false);

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
        {windowProject && (
          <WindowFull setState={setWindowProject} setName={setName} setIcon={setIcon} setShowTaskBar={setShowTaskBar}>
            <MyProjects />
          </WindowFull>
        )}

        {windowExperience && (
          <WindowFull setState={setWindowExperience} setName={setName} setIcon={setIcon} setShowTaskBar={setShowTaskBar}>
            <Experience />
          </WindowFull>
        )}

        {windowEducation && (
          <WindowFull setState={setWindowEducation} setName={setName} setIcon={setIcon} setShowTaskBar={setShowTaskBar}>
            <Education />
          </WindowFull>
        )}

        {windowSkills && (
          <WindowFull setState={setWindowSkills} setName={setName} setIcon={setIcon} setShowTaskBar={setShowTaskBar}>
            <Skills />
          </WindowFull>
        )}

        {windowResume && (
          <WindowFull setState={setWindowResume} setName={setName} setIcon={setIcon} setShowTaskBar={setShowTaskBar}>
            <Resume />
          </WindowFull>
        )}

        {windowEmail && (
          <WindowFull setState={setWindowEmail} setName={setName} setIcon={setIcon} setShowTaskBar={setShowTaskBar}>
            <Email />
          </WindowFull>
        )}

        <div className="desktop-section">
          <div className="folders">
            <div className="folder" onClick={() => { openWindow(setWindowProject, setName, 'Projetos', setIcon, myProjects, setShowTaskBar); }}>
              <img src={myProjects} alt="Meus Projetos" />
              <p>Projetos</p>
            </div>
            <div className="folder" onClick={() => { openWindow(setWindowExperience, setName, 'Experiência', setIcon, experience, setShowTaskBar); }}>
              <img src={experience} alt="Experiência" />
              <p>Experiência</p>
            </div>
            <div className="folder" onClick={() => { openWindow(setWindowEducation, setName, 'Educação', setIcon, education, setShowTaskBar); }}>
              <img src={education} alt="Educação" />
              <p>Educação</p>
            </div>
            <div className="folder" onClick={() => { openWindow(setWindowSkills, setName, 'Habilidades', setIcon, skills, setShowTaskBar); }}>
              <img src={skills} alt="Habilidades" />
              <p>Habilidades</p>
            </div>
          </div>
          <div className="files">
            <a className="file" href="https://github.com/KayoLino" target="_blank">
              <img src={github} alt="GitHub" />
              <p>GitHub</p>
            </a>
            <div className="file" onClick={() => { openWindow(setWindowResume, setName, 'Resumo', setIcon, resume, setShowTaskBar); }}>
              <img src={resume} alt="Resumo" />
              <p>Resumo.pdf</p>
            </div>
            <div className="file" onClick={() => { openWindow(setWindowEmail, setName, 'Email', setIcon, email, setShowTaskBar); }}>
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
