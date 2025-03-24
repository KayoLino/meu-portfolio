import './myProjects.css';


export default function MyProjects() {
  return (
    <div className="projects-container">
      <div className="project-one">
        <h1>KOBATASK</h1>

        <p className="project-one-github">
          Github do Projeto <a href="https://github.com/KayoLino/KOBATASK" target="_blank">aqui</a>.
        </p>
        <p className="project-one-figma">
          Figma <a href="https://www.figma.com/design/3PJlUxpGA3qUbQUDL0EYXj/KOBATASK?node-id=3-2&m=dev&t=ru4SpndcNSZETvXj-1" target="_blank">aqui</a>.
        </p>

        <p className="project-one-tecnology">Tecnologias utilizadas:</p>
        <p className="project-one-p">React.js</p>
        <p className="project-one-p">Next.js</p>
        <p className="project-one-p">TypeScript</p>
        <p className="project-one-p">JavaScript</p>
        <p className="project-one-p">Node.js</p>
        <p className="project-one-p">MySQL</p>
        <p className="project-one-p">Tailwind CSS</p>
      </div>


    </div>
  );
}


